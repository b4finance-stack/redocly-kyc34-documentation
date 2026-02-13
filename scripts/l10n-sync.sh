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

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required to run this script." >&2
  exit 1
fi

LOCALE_ROOT="$ROOT_DIR/@l10n/$LOCALE"
mkdir -p "$LOCALE_ROOT"

echo "Syncing locale '$LOCALE' (scope: $SCOPE)"

for src in "${SOURCES[@]}"; do
  if [[ ! -e "$ROOT_DIR/$src" ]]; then
    echo "Skip missing source: $src"
    continue
  fi

  mkdir -p "$LOCALE_ROOT/$src"
  rsync -a --ignore-existing "$ROOT_DIR/$src/" "$LOCALE_ROOT/$src/"
  echo "- synced missing files: $src"
done

if [[ ! -f "$LOCALE_ROOT/translations.yaml" ]]; then
  if [[ -f "$ROOT_DIR/translations.yaml" ]]; then
    cp "$ROOT_DIR/translations.yaml" "$LOCALE_ROOT/translations.yaml"
    echo "- created translations file from root: @l10n/$LOCALE/translations.yaml"
  else
    : > "$LOCALE_ROOT/translations.yaml"
    echo "- created empty translations file: @l10n/$LOCALE/translations.yaml"
  fi
fi

echo "Done. Locale scaffold is ready in @l10n/$LOCALE"
