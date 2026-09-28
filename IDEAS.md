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

## Pendiente con fecha

- **2027-03 — Eliminar bloques de migración `LEGACY_*`**: las 16 herramientas guardan en clave = slug desde 2026-09. Buscar `MIGRACIÓN (2026-09-21)` en cada `index.html` (más `SLUGS`/`LEGACY` en `index.html` raíz) y borrar esos bloques. Recién entonces las claves viejas (`gsd-tareas`, `people`, `csv-grafico-*`, etc.) dejan de leerse.
