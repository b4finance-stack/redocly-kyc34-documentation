// scripts/modal-image.bundle.js
// Modal Image bundle — reset previous injections, theme-aware background, no scroll jump.

(function () {
  "use strict";

  // --- Clean up any previous injections (avoids conflicting CSS/DOM) ---
  try {
    document.querySelectorAll('style[data-mi]').forEach(n => n.remove());
    const stale = document.querySelectorAll('#mi-overlay, #mi-modal');
    stale.forEach(n => n.remove());
  } catch (_) {}

  // --- Inject fresh CSS (overlay background set inline at open time) ---
  const css = `
#mi-overlay{position:fixed;inset:0;display:none;z-index:2147483646;cursor:zoom-out}
#mi-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:2rem;z-index:2147483647;cursor:zoom-out}
#mi-frame{background:#000;border-radius:12px;border:1px solid rgba(255,255,255,.08);padding:10px;box-shadow:0 10px 40px rgba(0,0,0,.5);cursor:inherit}
#mi-modal img{max-width:min(92vw,1600px);max-height:92vh;width:auto;height:auto;display:block;-webkit-user-drag:none;user-select:none;cursor:inherit}
body.mi-open{position:fixed;width:100%;overflow:hidden}
a[data-mi] img,img[data-mi]{cursor:zoom-in}
#mi-overlay[data-open="true"],#mi-modal[data-open="true"]{animation:mi-fade 120ms ease-out}
@keyframes mi-fade{from{opacity:0}to{opacity:1}}
`.trim();

  const style = document.createElement('style');
  style.setAttribute('data-mi', 'true');
  style.textContent = css;
  document.head.appendChild(style);

  // --- Module state (shared) ---
  let overlay, modal, frame, img;
  let isOpen = false, scrollY = 0, openedAt = 0;

  // --- Color helpers ---
  function parseRGB(str) {
    if (!str) return null;
    // rgb / rgba
    let m = str.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([0-9.]+))?\s*\)/i);
    if (m) return { r: +m[1], g: +m[2], b: +m[3], a: m[4] ? +m[4] : 1 };
    // hex #rgb / #rrggbb
    m = str.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (m) {
      let h = m[1].toLowerCase();
      if (h.length === 3) h = h.split('').map(c => c + c).join('');
      const r = parseInt(h.slice(0,2),16);
      const g = parseInt(h.slice(2,4),16);
      const b = parseInt(h.slice(4,6),16);
      return { r, g, b, a: 1 };
    }
    // named colors fallback not handled; return null
    return null;
  }

  function readThemeBg() {
    // Try themed variable first
    const root = document.documentElement;
    let bgVar = getComputedStyle(root).getPropertyValue('--content-background-color').trim();
    // Fallback to computed body/html backgrounds if var is empty/transparent
    let rgba = parseRGB(bgVar);
    if (!rgba || rgba.a === 0) {
      const bodyBg = getComputedStyle(document.body).backgroundColor;
      const htmlBg = getComputedStyle(root).backgroundColor;
      rgba = parseRGB(bodyBg);
      if (!rgba || rgba.a === 0) rgba = parseRGB(htmlBg);
    }
    // Final fallback: light/dark guess
    if (!rgba) {
      const dark = document.documentElement.classList.contains('dark');
      rgba = dark ? { r:11,g:14,b:20,a:1 } : { r:255,g:255,b:255,a:1 };
    }
    return rgba;
  }

  // --- Build DOM once ---
  function ensureDom() {
    if (overlay && modal && frame && img) return;

    overlay = document.createElement('div');
    overlay.id = 'mi-overlay';

    modal = document.createElement('div');
    modal.id = 'mi-modal';

    frame = document.createElement('div');
    frame.id = 'mi-frame';

    img = document.createElement('img');
    img.alt = '';

    frame.appendChild(img);
    modal.appendChild(frame);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    const close = () => {
      if (!isOpen) return;
      isOpen = false;
      overlay.style.display = 'none'; overlay.removeAttribute('data-open');
      modal.style.display   = 'none'; modal.removeAttribute('data-open');
      img.src = '';
      document.body.classList.remove('mi-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    };

    const anyClose = (e) => {
      if (!isOpen) return;
      if (Date.now() - openedAt < 80) return; // avoid closing from the opening click
      e.preventDefault(); e.stopPropagation();
      close();
    };

    overlay.addEventListener('click', anyClose, { capture: true });
    modal  .addEventListener('click', anyClose, { capture: true });
    frame  .addEventListener('click', anyClose, { capture: true });
    img    .addEventListener('click', anyClose, { capture: true });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') anyClose(e); });

    window.addEventListener('wheel',     (e)=>{ if (isOpen){ e.preventDefault(); e.stopPropagation(); } }, { passive:false, capture:true });
    window.addEventListener('touchmove', (e)=>{ if (isOpen){ e.preventDefault(); e.stopPropagation(); } }, { passive:false, capture:true });
  }

  // --- Open modal (theme-aware overlay & frame) ---
  function openModal(src, alt) {
    ensureDom();

    scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.classList.add('mi-open');
    document.body.style.top = `-${scrollY}px`;

    const { r, g, b } = readThemeBg();
    // frame = solid theme background
    frame.style.background = `rgb(${r}, ${g}, ${b})`;
    // overlay = same color, semi-transparent (tune alpha here)
    const alpha = 0.60; // <-- make lighter/darker as you like
    overlay.style.background = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    img.src = src; img.alt = alt || '';
    overlay.style.display = 'block'; overlay.setAttribute('data-open','true');
    modal.style.display   = 'flex';  modal.setAttribute('data-open','true');
    isOpen = true; openedAt = Date.now();
  }

  // --- Click delegation ---
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('a[data-mi], img[data-mi]');
    if (!trigger) return;
    e.preventDefault(); e.stopPropagation();

    let src = '', alt = '';
    if (trigger.tagName === 'A') {
      const im = trigger.querySelector('img');
      src = trigger.getAttribute('href') ||
            (im && (im.getAttribute('data-src') || im.getAttribute('src'))) || '';
      alt = (im && im.getAttribute('alt')) || trigger.getAttribute('data-alt') || '';
    } else {
      src = trigger.getAttribute('data-src') || trigger.getAttribute('src') || '';
      alt = trigger.getAttribute('alt') || '';
    }
    if (!src) return;

    openModal(src, alt);
  }, { passive: false, capture: true });

  // Optional global API
  window.__mi_open = openModal;
})();
