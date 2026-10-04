# 🧮 Calculadora

Escribí en texto, mirá el resultado en LaTeX.

## Uso

Escribí una expresión (ej: `log2(1024) + 2^10`) y tocá **Enter** o **＝ Guardar** para guardarla en el historial. El resultado se muestra como número y renderizado en LaTeX. Tocando el número lo copiás; con **↑↓** navegás el historial sin salir del teclado.

- Funciones: `log2()`, `log10()` (alias `log()`), `sqrt()`.
- Operadores: `+ - * / % ^` (`**` también es potencia), paréntesis, `!` factorial.
- `%` es resto (módulo): `10%3 = 1`.
- `!` solo admite enteros de 0 a 100000 (el resultado es exacto hasta 20000, incluso más allá de `170!`).
- `ans` vale el último resultado guardado: calculá `2^10`, después escribí `log2(ans)`. En el LaTeX aparece el valor (ej: `\log_{2}{(1024)}`).
- Acepta coma o punto decimal, y notación científica pegada (`1.024e+3`); la `e` suelta sigue siendo Euler.
- **Modo exacto**: si el cálculo desborda los decimales nativos (ej: `2^1024`), se recalcula exacto con enteros arbitrarios. Vale para `+ - * % ^ !` y `sqrt`/`log2`/`log10` exactos (ej: `log2(2^1024) = 1024`); el resto sigue dando error de rango. Tope de seguridad: ~10 millones de cifras.
- **Notación científica**: el switch la activa para resultados de más de 3 cifras enteras (ej: `1024` → `1.024e+3`), en el número, el LaTeX y el historial.

Botones: **∑ Abrir en EqTeX** (lleva la ecuación a EqTeX para exportar el PNG), **📋 LaTeX** (copia el LaTeX: la ecuación completa si hay resultado, la expresión si falló el cálculo), **🔗 Compartir** (URL con la expresión).

Abajo del resultado hay un link discreto a WolframAlpha con la expresión ya cargada, para cálculos más complicados.

El historial se guarda en este navegador y sobrevive al recargar.
