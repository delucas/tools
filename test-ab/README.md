# A/B

Compará dos grupos de observaciones numéricas: descriptivos por grupo, diferencia de medias con intervalo de confianza, t clásica o de Welch, p bilateral, d de Cohen e histogramas con bins compartidos.

## Uso

1. Abrir `index.html`.
2. Pegar los valores de cada grupo (uno por línea, coma o espacio).
3. Elegir prueba (clásica/Welch) y confianza del IC (90/95/99).
4. Leer la comparación, mirar los histogramas y el IC, y con "📊 Ver esta t en p-value" abrir el estadístico en esa herramienta.

Los datos se guardan solos en `localStorage` (clave `test-ab`, con tope de tamaño). Con el botón "🔗 Compartir" se copia un link con parámetros y datos chicos. El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo de los dos cursos.
