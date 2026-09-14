PORT ?= 4000

.PHONY: serve deploy
serve:
	python3 -m http.server $(PORT)

deploy:
	git push
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "ATENCIÓN: hay cambios sin commitear que NO se desplegaron:"; \
		git status --short; \
	else \
		echo "Todo desplegado, working tree limpio."; \
	fi
