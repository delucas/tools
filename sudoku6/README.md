# Sudoku6

Sudoku de 6×6 tranquilo: tablero con cuadrantes de 2×3, números del 1 al 6, anotaciones y partida guardada sola.

## Uso

1. Abrir `index.html`.
2. Elegir dificultad (Fácil, Media, Difícil): cada partida se genera con solución única verificada.
3. Elegir una casilla y escribir con la botonera o el teclado (1–6, flechas, `N` para anotaciones, `Supr` borra).
4. Las pistas originales no se pueden cambiar; los conflictos se marcan sin bloquear.
5. Al fijar un número, ese candidato se limpia de su fila, columna y cuadrante.
6. Todo (nivel, tablero, valores, notas y estado) se guarda en `localStorage`: recargar retoma la partida. Reiniciar pide confirmación si hay progreso.
