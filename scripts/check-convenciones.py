#!/usr/bin/env python3
"""Valida convenciones de mantenibilidad comunes a todas las herramientas."""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
LIMITE_JS = 1000
LIMITES_JS = {"estructuras": 1500}

TAG = re.compile(r"<(?:script|link)\b[^>]*>", re.I | re.S)
URL_CDN = re.compile(r'\b(?:src|href)="(https://[^"]+)"', re.I)
VERSION = re.compile(r"(?:@|/)\d+\.\d+\.\d+(?:[/-]|$)")
SCRIPT_INLINE = re.compile(
    r"<script\b(?![^>]*\bsrc=)(?![^>]*type=\"application/json\")[^>]*>(.*?)</script>",
    re.I | re.S,
)
STYLE = re.compile(r"<style[^>]*>(.*?)</style>", re.I | re.S)
FORM_SM = re.compile(r"\b(?:form-control-sm|form-select-sm|input-group-sm)\b")
DECODE = re.compile(r"decodeURIComponent\s*\(")
GET_ASIGNADO = re.compile(
    r"\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*[^;\n]*?"
    r"(?:URLSearchParams\([^)]*\)|[\w$.]+)\.get\(\s*['\"][^'\"]*['\"]\s*\)"
)
DECODE_VAR = re.compile(r"decodeURIComponent\(\s*([A-Za-z_$][\w$]*)\s*\)")


def lineas_js(html):
    return sum(len(bloque.splitlines()) for bloque in SCRIPT_INLINE.findall(html))


def codigo_sin_comentarios(html):
    """Quita comentarios de línea para no confundir documentación con código."""
    return "\n".join(
        linea for linea in html.splitlines()
        if not linea.strip().startswith(("//", "*", "/*"))
    )


def revisar_cdn(html, nombre, errores):
    for etiqueta in TAG.findall(html):
        match = URL_CDN.search(etiqueta)
        if not match:
            continue
        url = match.group(1)
        if "latest" in url or not VERSION.search(url):
            errores.append(f"{nombre}: CDN sin versión fija -> {url}")
        if "integrity=" not in etiqueta:
            errores.append(f"{nombre}: CDN sin integrity (SRI) -> {url}")


def revisar(archivo, nombre, errores):
    html = archivo.read_text(encoding="utf-8")
    codigo = codigo_sin_comentarios(html)

    limite = LIMITES_JS.get(nombre, LIMITE_JS)
    lineas = lineas_js(html)
    if lineas > limite:
        errores.append(f"{nombre}: {lineas} líneas de JS inline (límite {limite})")

    revisar_cdn(html, nombre, errores)

    variables = set(GET_ASIGNADO.findall(codigo))
    detectado = False
    for variable in sorted(variables):
        if re.search(r"decodeURIComponent\(\s*" + re.escape(variable) + r"\s*\)", codigo):
            errores.append(
                f"{nombre}: decodifica dos veces '{variable}' "
                "(URLSearchParams.get() ya decodifica)"
            )
            detectado = True
    if not detectado and "URLSearchParams" in html and DECODE.search(codigo):
        errores.append(
            f"{nombre}: usa decodeURIComponent() sobre datos de URL "
            "(URLSearchParams.get() ya decodifica)"
        )

    css = "\n".join(STYLE.findall(html))
    if FORM_SM.search(html) and not re.search(r"font-size\s*:\s*16px", css):
        errores.append(
            f"{nombre}: usa form-control-sm/form-select-sm sin override de 16px en mobile"
        )

    for falta, patron in (
        ("idioma español", r'<html lang="es">'),
        ("enlace al índice", r"← Todas las herramientas"),
        ("firma", r'class="signature'),
        ("soporte de tema", r"data-bs-theme"),
    ):
        if not re.search(patron, html):
            errores.append(f"{nombre}: falta {falta}")


def main():
    herramientas = sorted(
        (p.parent for p in RAIZ.glob("*/index.html")),
        key=lambda p: p.name,
    )
    errores = []
    for carpeta in herramientas:
        revisar(carpeta / "index.html", carpeta.name, errores)

    # El índice raíz también carga CDN: mismas reglas de versión y SRI.
    indice = RAIZ / "index.html"
    if indice.is_file():
        revisar_cdn(indice.read_text(encoding="utf-8"), "index.html raíz", errores)

    if errores:
        for error in errores:
            print(f"FALTA: {error}")
        return 1

    print(f"OK: convenciones en {len(herramientas)} herramientas")
    return 0


if __name__ == "__main__":
    sys.exit(main())
