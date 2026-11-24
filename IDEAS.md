# Ideas

Próximas herramientas a armar.

-

## Sinergias entre herramientas (para madurar, no hacer ahora)

Integraciones que ya existen: `checksmith → gsd` (`?addList=`), `vcard → qrlabs`, `lector-qr → qrlabs`.

Flujos que combinan bien:

- Académico: `apacalypse + eqtex + markpress + docfactory` (+ `hojitas` para anexos imprimibles).
- Texto y datos: `textwrangler + delta + docfactory + csv-a-grafico` (+ `roller` para muestrear filas).
- Contacto físico-digital: `vcard + qrlabs + lector-qr + linkdb`.
- Diseño verificable: `chromatic + svg + fontoscope + image-inspector + fingerprint`.
- Productividad y reuniones: `gsd + checksmith + basket + clocks + tick + pre-flight`.
- Docencia: `pseditor + truth + markpress + tick + roller + guess`.
- Seguridad mínima: `sauriopass + fingerprint + wand`.
- Pegamento: `💾 Escritorio` como perfiles de proyecto (un JSON por contexto: clases, diseño, admin).

Idea a madurar: "kits temáticos" (ej: Kit Docente, Kit Freelance-Remoto, Kit Diseño) con URLs pre-cargadas para cada flujo.

## IDEAS del 2026-11-21

Recorrí el catálogo completo (64 herramientas, 12 secciones) y mapeé los links cruzados entre herramientas. El grafo es bastante ralo: hay 11 puentes en total (checksmith→gsd, vcard↔qrlabs, lector-qr→qrlabs, calculadora→eqtex, metalicos→eqtex, roller→azar, test-ab→p-value, swatchbook↔chromatic, clippy→svg, n-factorial→pseditor, asignatron→tabletop).
No veo un hueco crítico: el catálogo ya es muy ancho y muchas herramientas son islas a propósito. Pero sí veo asimetrías y eslabones faltantes en flujos que ya existen. Ordenadas por qué tan evidentes me parecen:
Las más evidentes
1. Generador de códigos de barras
lector-qr lee QR y códigos de barras 1D, pero qrlabs solo genera QR. La asimetría es literal: tenés el lector sin el generador. Un tool chico con Code128, EAN-13, EAN-8, UPC-A e ITF, con salida PNG/SVG y un botón "probar en Lector QR", cerraría el par. Puede ser una pestaña nueva de QRlabs o una herramienta aparte; entra cómodo en el límite de 1000 líneas con JsBarcode.
2. Tester de expresiones regulares
Texto y datos tiene textwrangler (operaciones por línea), delta (diff), tabletop (tablas) y csv-a-grafico (gráficos), pero nada que busque o reemplace con un patrón. Un regex tester con resaltado en vivo, grupos, reemplazo $1, flags y "mandar el resultado a TextWrangler" complementa directamente a textwrangler, delta y hasta docfactory. Es vanilla puro y corto.
3. Conversor/editor de imágenes
image-inspector es solo lectura: mira, hashea y muestra EXIF, pero no convierte nada. escaner-pdf recorta fotos de hojas, pero no es un editor general. Falta lo básico: redimensionar, recortar, rotar, convertir entre PNG/JPEG/WebP y comprimir. Sería el complemento natural de image-inspector y de escaner-pdf.
4. Toolkit de PDF
escaner-pdf y markpress producen PDFs, pero no hay nada que abra, una, divida, extraiga, reordene o rote PDFs existentes. Es un hueco real del flujo de documentos. Lo pongo cuarto solo por peso: con pdf-lib y miniaturas de páginas puede acercarse al límite de líneas, así que quizás sea candidata a app dedicada antes que a herramienta del repo.
Segundo orden (más "feature" que herramienta nueva)
- Correlación/regresión: Stats describe una columna; falta un modo de dos columnas (o una herramienta aparte) con Pearson, recta y diagnóstico.
- Graficador y=f(x): calculadora evalúa expresiones pero no grafica; un ploter con zoom y export PNG/SVG la completaría.
- Planificador de reuniones: clocks muestra la hora actual de cada contacto, pero no "si reunimos a las 15:00 en Buenos Aires, ¿qué hora les queda?". Podría ser un modo de clocks o un tool de horarios + .ics.
- Citas por DOI/URL: apacalypse solo resuelve ISBN; un generador APA para artículos, capítulos y páginas web completaría el flujo académico.
- JSON ↔ CSV / formateador: tabletop no toca JSON; un validador/formateador y conversor JSON↔CSV dialoga con tabletop y clippy.
- Fuerza/entropía de contraseñas: sauriopass genera, pero no evalúa; un medidor de entropía y tiempo de crackeo sería su complemento.
- Probador de gamepad y de pantalla: teclado y mouse son hermanos; faltan gamepad y test de píxeles muertos/colores.
- Etiquetas/pegatinas: hojitas, grillas y papeles cubren A4 y tamaños ISO, pero no etiquetas tipo Avery.
Puentes baratos que no necesitan herramienta nueva
- dataset → botones "analizar en Stats/A-B/¿azar?" (ya hay enlaces; faltaría que precarguen los datos).
- estructuras → "abrir en SVG" (exporta SVG, pero no lo lleva al editor).
- image-inspector → "extraer colores a Chromatic/Swatchbook".
- gsd → "guardar lista como plantilla en Checksmith" (hoy el puente va solo en un sentido).
- apacalypse y docfactory → "abrir en MarkPress".
- between → "crear cuenta atrás en Tick" desde una fecha.
Mi orden si hay que elegir: Generador de códigos de barras → Regex → Conversor de imágenes → Toolkit de PDF. Las dos primeras son las que más "gritan" por el estado actual del catálogo.
