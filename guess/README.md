# Guess

Adiviná el número que piensa la máquina (de 1 al tope que elijas): te dice si es más grande o más chico hasta que ganás.

## Uso

1. Elegí el tope con el número (de 2 a 1.000.000). Cambiarlo arranca un número nuevo.
2. Escribí tu número y tocá `Probar` (o Enter). Los repetidos o fuera de rango no cuentan.
3. Al ganar queda el festejo, se guarda en el historial y `Jugar de nuevo` piensa otro con el mismo tope.
4. El historial guarda fecha, tope, elegido y pasos (hasta 100). Arriba se destaca el 🏆 récord (mínimo pasos/tope). Copialo o descargalo en CSV, o borralo con `🗑️ Borrar` o la ✕ de cada fila.
5. Todo se guarda en el navegador; ni recargar cambia el número. `🗑️ Reiniciar` borra todo y arranca de cero.

El número se elige con `crypto.getRandomValues` (muestreo por rechazo, sin sesgo).
