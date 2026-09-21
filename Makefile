PORT ?= 4000

.DEFAULT_GOAL := help

.PHONY: help serve check status deploy

help:
	@echo "Uso: make [target]"
	@echo ""
	@echo "  serve   Servidor local en http://localhost:$(PORT) (ej: make serve PORT=8080)"
	@echo "  check   Valida el repo: estructura, listados, SLUGS del Escritorio y sintaxis JS"
	@echo "  status  Estado del working tree y de la rama vs remoto"
	@echo "  deploy  Pushea los commits y avisa si quedan cambios sin commitear"

serve:
	python3 -m http.server $(PORT)

check:
	@fail=0; \
	for d in */; do \
	slug=$${d%/}; \
	[ -f "$$slug/index.html" ] || continue; \
	[ -f "$$slug/README.md" ] || { echo "FALTA: $$slug/README.md"; fail=1; }; \
	grep -q "href=\"$$slug/\"" index.html || { echo "FALTA: $$slug no listado en index.html raíz"; fail=1; }; \
	grep -q "(./$$slug)" README.md || { echo "FALTA: $$slug no listado en README.md raíz"; fail=1; }; \
	grep -q "'$$slug'" index.html || { echo "FALTA: $$slug no está en SLUGS del Escritorio"; fail=1; }; \
	done; \
	if command -v node >/dev/null 2>&1; then \
	tmp=$$(mktemp -d); \
	trap 'rm -rf "$$tmp"' EXIT INT TERM; \
	for f in index.html */index.html; do \
	[ -f "$$f" ] || continue; \
	n=$$(python3 -c 'import re,sys,pathlib; bs=re.findall(r"<script(?![^>]*src=)[^>]*>(.*?)</script>", pathlib.Path(sys.argv[1]).read_text(), re.S); [pathlib.Path(sys.argv[2] + str(i) + ".js").write_text(b) for i,b in enumerate(bs)]; print(len(bs))' "$$f" "$$tmp/blk-"); \
	j=0; \
	while [ "$$j" -lt "$$n" ]; do \
	node --check "$$tmp/blk-$$j.js" || { echo "FALTA: sintaxis JS en $$f (bloque $$j)"; fail=1; }; \
	j=$$((j+1)); \
	done; \
	done; \
	else \
	echo "AVISO: node no encontrado, se omite el chequeo de sintaxis JS"; \
	fi; \
	if [ "$$fail" = 0 ]; then echo "OK: validación completa"; fi; \
	exit $$fail

status:
	@git status --short --branch

deploy:
	@echo "== Pre-push: esto está pendiente y NO se desplega =="
	@git status --short --branch
	@git push
	@if [ -n "$$(git status --porcelain)" ]; then echo "ATENCIÓN: quedaron cambios sin commitear (NO se desplegaron)."; else echo "Todo desplegado, working tree limpio."; fi
