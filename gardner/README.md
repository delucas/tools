# Gardner

Ajedrez miniatura sobre un tablero de 5×5, para jugar de a dos en el mismo celular.

Cada jugador tiene rey, dama, torre, alfil, caballo y cinco peones. Se mantienen los movimientos normales de las piezas y gana el jaque mate. No hay enroque, ni doble paso inicial de peón, ni captura al paso; los peones coronan al llegar a la última fila (a dama, torre, alfil o caballo).

## Uso

1. Abrir `index.html`.
2. Tocar una pieza propia y después su casilla de destino: los puntos marcan los movimientos legales y el rey en jaque se resalta en rojo.
3. Los jugadores se turnan en la misma pantalla; un aviso flotante indica de quién es el turno.
4. El tablero muestra las coordenadas (columnas a–e, filas 1–5) y debajo queda el historial de movimientos en notación de ajedrez. Tocá un movimiento (o pasá el mouse por encima) para ver qué pieza es.
5. La partida en curso se guarda sola: recargar retoma donde estabas.
6. `🔗 Compartir` copia un link con la posición actual; `🗑️ Reiniciar` arranca una partida nueva (pide confirmación en dos toques).
7. `⛶ Pantalla completa` agranda el tablero a toda la pantalla (útil en el celular); se sale con `✕ Salir`, `Esc` o el gesto de volver.
8. Para jugar contra la máquina, el botón `🤖 Contra la máquina` abre [Gardner en varichess](https://varichess.org/play/gardner).

## Reglas

- Tablero 5×5. Blancas: torre a1, caballo b1, alfil c1, dama d1, rey e1 y peones en la segunda fila; las negras se reflejan igual.
- Sin enroque, sin doble paso de peón y sin captura al paso.
- Gana el jaque mate. El rey ahogado, el material insuficiente, la triple repetición y la regla de 50 jugadas son tablas.
