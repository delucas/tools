# Conversor de bases

Conversor de enteros positivos entre binario, octal, decimal, hexadecimal y cualquier base de 2 a 36. Escribís en cualquiera de los campos y los demás se actualizan en vivo; también muestra cómo se recompone el número y grafica el aporte de cada posición.

## Uso

1. Abrir `index.html`.
2. Escribir el número en cualquiera de los campos: decimal, binario, octal, hexadecimal u otra base (2 a 36).
3. Leer las equivalencias en los otros campos. El campo que estás editando queda resaltado.
4. Abrir **Cómo se compone** para ver el gráfico de aportes por posición, elegir escala lineal o logarítmica y, si querés, la cuenta término por término.
5. Abrir **Ver todas las bases (2–36)** para la tabla completa; se puede copiar entera.
6. Usar `📋` al lado de cada campo para copiar solo esa representación.

Acepta hasta 128 dígitos al escribir en un campo, mayúsculas y minúsculas en las bases con letras, y los prefijos `0b`, `0o` y `0x` al pegar. Solo enteros positivos: no admite signo negativo ni fracciones. Usa `BigInt`, así que no pierde precisión.

## Cómo se compone

El campo activo define la base de la composición. Por ejemplo, con `101010` en base 2:

```text
101010₂ = 1 × 2⁵ + 0 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰
        = 32 + 8 + 2 = 42
```

El gráfico muestra una barra por posición y se puede cambiar con el selector **Escala**:

- **Lineal**: la altura de cada barra es proporcional a su aporte. Es la más directa para ver proporciones.
- **Logarítmica**: comprime las diferencias para que los aportes chicos sigan siendo visibles al lado del más grande. Es la escala por defecto.

La posición 0 es la de las unidades. El gráfico no reemplaza la cuenta exacta: para eso está el desplegable de la composición.

## Estado

- Guarda `{ b, v, cb, sc }` en `localStorage['conversor-bases']`: base activa, valor canónico en esa base, base extra elegida y escala del gráfico (`linear` o `log`).
- Prioridad URL (`?b=2&v=101010&cb=12&sc=log`) > `localStorage` > estado por defecto (`42`, base 2 activa, base extra 12, escala logarítmica).
- Un link compartido no pisa lo guardado.
- `🔗 Compartir` copia la URL con el estado; `🗑️ Reiniciar` vuelve al ejemplo y pide confirmación en dos toques.
- Se integra con `💾 Escritorio` del índice raíz.

## Límites

- Solo números enteros positivos (incluido el 0).
- No convierte fracciones ni usa complemento a dos: no hay negativos.
- Bases de 2 a 36.
- Tope de 128 dígitos por campo de entrada.
- El gráfico usa la escala elegida: la lineal es proporcional al aporte; la logarítmica representa el peso relativo, no el valor absoluto.

## Trivias

Al final de la herramienta hay tres preguntas desplegables sobre subíndices de base, los símbolos hexadecimales y el paso directo de binario a hexadecimal.
