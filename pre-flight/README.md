# Pre-flight

Chequeo pre-llamada: probá tu cámara, micrófono y parlantes antes de entrar a una llamada.

## Uso

1. Tocá **Iniciar prueba** y permití el acceso cuando el navegador lo pida.
2. Mirá tu imagen en la vista previa (pide UHD y baja hasta la mejor resolución de tu cámara; la real se muestra debajo), hablás y mirá el medidor de nivel, y tocá **Probar parlantes** para escuchar el bip.
3. Si tenés varias cámaras o micrófonos, cambialos en los selectores.
4. **Detener** libera la cámara y el micrófono (la luz se apaga).

## Aviso importante

El navegador solo permite cámara y micrófono en un **contexto seguro**: funciona por `https` o en `localhost` (ej. `make serve`), pero **no** abriendo el archivo con `file://`. Si ves ese error, serví la carpeta en local.

## Privacidad

Nada se graba ni se guarda: no hay `localStorage` propio (solo el `theme` global), no hay Compartir ni Reiniciar porque no hay estado.
