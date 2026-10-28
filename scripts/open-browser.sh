#!/usr/bin/env bash
# Abre una URL en una ventana nueva del navegador predeterminado.
# Uso: scripts/open-browser.sh <url>
set -u

url="${1:?falta la URL}"

# Linux: deducir el navegador predeterminado y pedirle una ventana nueva.
if command -v xdg-settings >/dev/null 2>&1; then
	id="$(xdg-settings get default-web-browser 2>/dev/null || true)"
	case "$id" in
		*vivaldi*) bin=vivaldi ;;
		*google-chrome*) bin=google-chrome ;;
		*chrome*) bin=google-chrome ;;
		*chromium*) bin=chromium ;;
		*brave*) bin=brave-browser ;;
		*edge*) bin=microsoft-edge ;;
		*opera*) bin=opera ;;
		*firefox*) bin=firefox ;;
		*) bin="" ;;
	esac
	if [ -n "$bin" ] && command -v "$bin" >/dev/null 2>&1; then
		if command -v setsid >/dev/null 2>&1; then
			setsid --fork "$bin" --new-window "$url" >/dev/null 2>&1 && exit 0
		else
			nohup "$bin" --new-window "$url" >/dev/null 2>&1 &
			exit 0
		fi
	fi
fi

# macOS: probar los navegadores habituales antes de caer en el predeterminado.
if [ "$(uname -s)" = "Darwin" ]; then
	for app in "Google Chrome" "Brave Browser" "Microsoft Edge" "Chromium" "Firefox"; do
		if [ -d "/Applications/$app.app" ]; then
			open -na "$app" --args --new-window "$url" && exit 0
		fi
	done
	open "$url" && exit 0
fi

# Último recurso: el manejador del sistema (suele abrir una pestaña nueva).
if command -v xdg-open >/dev/null 2>&1; then
	xdg-open "$url" >/dev/null 2>&1 && exit 0
elif command -v wslview >/dev/null 2>&1; then
	wslview "$url" && exit 0
elif command -v open >/dev/null 2>&1; then
	open "$url" && exit 0
fi

echo "No encontré cómo abrir el navegador; entrá a $url"
exit 1
