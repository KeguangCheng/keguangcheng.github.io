#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [ -x /opt/homebrew/opt/ruby@3.3/bin/ruby ]; then
  export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
fi
export BUNDLE_PATH="$HOME/.cache/keguang-website/bundle"
preview_url="http://127.0.0.1:4000"
if curl --silent --fail "$preview_url/" | grep -q 'Keguang Cheng'; then
  open "$preview_url"
  echo "Preview is already running at $preview_url"
  exit 0
fi
bundle check || bundle install
echo "Local preview: $preview_url"
echo "Keep this Terminal window open. Press Control-C to stop the preview."
(
  for attempt in {1..30}; do
    if curl --silent --fail "$preview_url/" >/dev/null; then
      open "$preview_url"
      exit 0
    fi
    sleep 1
  done
) &
exec bundle exec jekyll serve --config _config.yml,_config_local.yml --host 127.0.0.1 --port 4000 --force_polling
