#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOCALE="${1:-en}"
SCOPE="${2:-all}"

case "$SCOPE" in
  all)
    SOURCES=(documentation guide_utilisateur apis)
    ;;
  guide)
    SOURCES=(guide_utilisateur)
    ;;
  *)
    echo "Invalid scope: $SCOPE (use: all|guide)" >&2
    exit 1
    ;;
esac

LOCALE_ROOT="$ROOT_DIR/@l10n/$LOCALE"

if [[ ! -d "$LOCALE_ROOT" ]]; then
  echo "Locale folder not found: @l10n/$LOCALE" >&2
  exit 1
fi

missing=0
total=0

while IFS= read -r rel; do
  ((total += 1))
  if [[ ! -e "$LOCALE_ROOT/$rel" ]]; then
    echo "MISSING: @l10n/$LOCALE/$rel"
    ((missing += 1))
  fi
done < <(
  cd "$ROOT_DIR"
  find "${SOURCES[@]}" -type f | sort
)

echo "Checked $total source files for locale '$LOCALE' (scope: $SCOPE)."
echo "Missing files: $missing"

if (( missing > 0 )); then
  exit 1
fi
