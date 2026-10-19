#!/usr/bin/env python3
"""Valida el catálogo JSON del index.html raíz contra las carpetas de herramientas."""

import json
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
INDEX = RAIZ / "index.html"


def main():
    html = INDEX.read_text(encoding="utf-8")
    bloque = re.search(r'<script[^>]*\bid="catalogo"[^>]*>(.*?)</script>', html, re.S)
    if not bloque:
        print('FALTA: no se encontró el bloque <script id="catalogo">')
        return 1
    etiqueta = bloque.group(0)[: bloque.group(0).index(">") + 1]
    if 'type="application/json"' not in etiqueta:
        print('FALTA: el bloque #catalogo no es de tipo application/json')
        return 1
    try:
        data = json.loads(bloque.group(1))
    except json.JSONDecodeError as error:
        print(f"FALTA: el catálogo no es JSON válido ({error})")
        return 1

    errores = []
    if not isinstance(data, dict):
        print("FALTA: el catálogo debe ser un objeto JSON")
        return 1

    secciones = data.get("secciones")
    herramientas = data.get("herramientas")
    if not isinstance(secciones, list) or not secciones:
        errores.append("el catálogo no tiene secciones")
        secciones = []
    if not isinstance(herramientas, list) or not herramientas:
        errores.append("el catálogo no tiene herramientas")
        herramientas = []

    ids = set()
    titulos = set()
    for i, seccion in enumerate(secciones, 1):
        if not isinstance(seccion, dict):
            errores.append(f"sección {i}: debe ser un objeto")
            continue
        sid = seccion.get("id")
        titulo = seccion.get("titulo")
        if not isinstance(sid, str) or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", sid):
            errores.append(f"sección {i}: id inválido {sid!r}")
        elif sid in ids:
            errores.append(f"sección {i}: id duplicado {sid!r}")
        else:
            ids.add(sid)
        if not isinstance(titulo, str) or not titulo.strip():
            errores.append(f"sección {i}: falta el título")
        elif titulo in titulos:
            errores.append(f"sección {i}: título duplicado {titulo!r}")
        else:
            titulos.add(titulo)

    slugs = {}
    por_seccion = {sid: 0 for sid in ids}
    for i, herramienta in enumerate(herramientas, 1):
        if not isinstance(herramienta, dict):
            errores.append(f"herramienta {i}: debe ser un objeto")
            continue
        slug = herramienta.get("slug")
        nombre = herramienta.get("nombre")
        descripcion = herramienta.get("descripcion")
        seccion = herramienta.get("seccion")
        if not isinstance(slug, str) or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", slug):
            errores.append(f"herramienta {i}: slug inválido {slug!r}")
        elif slug in slugs:
            errores.append(f"herramienta {i}: slug duplicado {slug!r}")
        else:
            slugs[slug] = seccion
        if not isinstance(nombre, str) or not nombre.strip():
            errores.append(f"herramienta {i} ({slug}): falta el nombre")
        if not isinstance(descripcion, str) or not descripcion.strip():
            errores.append(f"herramienta {i} ({slug}): falta la descripción")
        if seccion not in ids:
            errores.append(f"herramienta {i} ({slug}): sección desconocida {seccion!r}")
        else:
            por_seccion[seccion] += 1

    for sid, cantidad in sorted(por_seccion.items()):
        if cantidad == 0:
            errores.append(f"sección {sid!r}: no tiene herramientas")

    dirs = {p.name for p in RAIZ.iterdir() if p.is_dir() and (p / "index.html").is_file()}
    for slug in sorted(dirs - set(slugs)):
        errores.append(f"{slug}: tiene index.html pero no está en el catálogo")
    for slug in sorted(set(slugs) - dirs):
        errores.append(f"{slug}: está en el catálogo pero no tiene carpeta/index.html")

    if errores:
        for error in errores:
            print(f"FALTA: {error}")
        return 1

    print(f"OK: catálogo con {len(slugs)} herramientas en {len(secciones)} grupos")
    return 0


if __name__ == "__main__":
    sys.exit(main())
