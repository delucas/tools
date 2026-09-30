# n?

Calculadora de tamaño muestral para planificar estudios: ingresá nivel de confianza, margen de error, proporción esperada o desvío estándar, y opcionalmente el tamaño de la población N.

## Uso

1. Abrir `index.html`.
2. Elegir entre estimar una proporción o una media.
3. Ajustar confianza (90/95/99 o Z libre), error, p o σ, y N si la población es finita.
4. El resultado se actualiza solo, con fórmula, sustitución, valores intermedios y tabla de sensibilidad al error.

El estado se guarda solo en `localStorage` (clave `n-muestra`). Con el botón "🔗 Compartir" se copia un link con los parámetros (`?modo=…&conf=…&e=…&p=…&N=…`). El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo (95%, e=5%, p=50% → n=385).
