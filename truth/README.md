# Tablas de Verdad

Generador de tablas de verdad a partir de una expresión booleana. Muestra también las columnas intermedias de cada subexpresión, no solo el resultado final.

## Uso

1. Abrir `index.html`.
2. Escribir una expresión usando variables (letras) y los operadores `&&`, `||`, `!`, `==`, con paréntesis para agrupar. Ej: `!(correoRecibido || mensajeNoLeido) && notificacionesActivadas`.
3. La tabla se arma sola con cada combinación de valores.

También se puede compartir una expresión por link con el parámetro `?e=`, ej. `index.html?e=a%26%26b`.
