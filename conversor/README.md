# Conversor

Conversor de unidades mínimo: solo las que complican, con dos casillas que se recalculan mutuamente.

## Uso

1. Abrir `index.html`.
2. Elegir la conversión (km↔mi, cm↔in, m↔ft, kg↔lb, L↔gal US, psi↔bar, °C↔°F, tiempo↔horas).
3. Escribir en cualquiera de las dos casillas: la otra se recalcula sola.
4. El tiempo acepta `H:MM`, `H:MM:SS` o minutos sueltos (`1:06` → `1,1`; `66m` → `1,1`).
5. Si la conversión te sirve para el futuro, tocala en **💾 Guardar en historial** (no se guarda nada solo).

El historial muestra fecha, conversión y unidades; cada fila se puede recargar en el conversor (↩️) o borrar. Todo se guarda en `localStorage`. Compartir copia una URL con la conversión actual (`?c=`, `?v=`, `?l=`). Reiniciar vuelve al ejemplo y limpia el query string.
