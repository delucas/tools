# p-value

Inferencia rápida con Z, t de Student, chi-cuadrado y F de Fisher: ingresá el estadístico (o α en modo inverso), los grados de libertad, la cola y α, y obtené p-value, valor crítico, región de rechazo, gráficos del área y la decisión sobre H₀.

## Uso

1. Abrir `index.html`.
2. Elegir distribución, cola y modo (directo x → p, o inverso α → crítico).
3. Ajustar parámetros y mirar el resultado y los gráficos, que se actualizan solos.

El estado se guarda solo en `localStorage` (clave `p-value`). Con el botón "🔗 Compartir" se copia un link con los parámetros (`?dist=…&cola=…&alfa=…&x=…`). El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo (Z = 1.96, cola derecha).
