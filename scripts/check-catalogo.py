#!/usr/bin/env python3
"""Valida el catálogo del index.html raíz contra las carpetas de herramientas."""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
INDEX = RAIZ / "index.html"


def texto(fragmento):
    return re.sub(r"<[^>]+>", "", fragmento).strip()


def main():
    html = INDEX.read_text(encoding="utf-8")
    secciones = list(re.finditer(r'<section class="tool-group[^"]*">(.*?)</section>', html, re.S))
    if not secciones:
        print("FALTA: no hay grupos .tool-group en index.html")
        return 1

    errores = []
    apariciones = {}
    grupos = set()

    for i, seccion in enumerate(secciones, 1):
        cuerpo = seccion.group(1)
        h2 = re.search(r"<h2[^>]*>(.*?)</h2>", cuerpo, re.S)
        if not h2:
            errores.append(f"grupo {i}: falta <h2>")
            nombre_grupo = f"grupo {i}"
        else:
            titulo = re.sub(r'<span class="group-count.*?</span>', "", h2.group(1), flags=re.S)
            nombre_grupo = texto(titulo)
            if nombre_grupo in grupos:
                errores.append(f"grupo duplicado: {nombre_grupo}")
            grupos.add(nombre_grupo)

        anclas = re.findall(r"<a\s+([^>]*?)>(.*?)</a>", cuerpo, re.S)
        if not anclas:
            errores.append(f"{nombre_grupo}: grupo vacío")

        for attrs, interior in anclas:
            href = re.search(r'href="([^"]*)"', attrs)
            if not href:
                errores.append(f"{nombre_grupo}: herramienta sin href")
                continue
            href = href.group(1)
            match = re.fullmatch(r"([a-z0-9][a-z0-9-]*)/", href)
            if not match:
                errores.append(f"{nombre_grupo}: href inválido {href!r}")
                continue
            slug = match.group(1)

            data_slug = re.search(r'data-slug="([^"]*)"', attrs)
            if data_slug and data_slug.group(1) != slug:
                errores.append(
                    f"{slug}: data-slug {data_slug.group(1)!r} no coincide con href {href!r}"
                )
            if not re.search(r"<strong[^>]*>\s*\S", interior):
                errores.append(f"{slug}: falta el nombre en <strong>")
            if not re.search(r"<small[^>]*>\s*\S", interior):
                errores.append(f"{slug}: falta la descripción en <small>")

            apariciones.setdefault(slug, []).append(nombre_grupo)

    for slug, grupos_slug in sorted(apariciones.items()):
        if len(grupos_slug) > 1:
            errores.append(f"{slug}: aparece {len(grupos_slug)} veces ({', '.join(grupos_slug)})")

    dirs = {p.name for p in RAIZ.iterdir() if p.is_dir() and (p / "index.html").is_file()}
    for slug in sorted(dirs - set(apariciones)):
        errores.append(f"{slug}: tiene index.html pero no está en el catálogo")
    for slug in sorted(set(apariciones) - dirs):
        errores.append(f"{slug}: está en el catálogo pero no tiene carpeta/index.html")

    if errores:
        for error in errores:
            print(f"FALTA: {error}")
        return 1

    print(f"OK: catálogo con {len(apariciones)} herramientas en {len(secciones)} grupos")
    return 0


if __name__ == "__main__":
    sys.exit(main())
