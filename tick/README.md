# Tick

Cuenta atrás gigante para proyectar: números enormes, en castellano, con alarma de sonido y destello al llegar a cero.

## Uso

1. Escribí la duración (`5`, `5:00` o `1:30:00`) o tocá un preset, y dale a **▶ Iniciar**. En el último minuto el display muestra solo los segundos, en grande.
2. **⛶ Pantalla completa** o **F11** para proyectar: se ven solamente el timer y la barra de progreso, bien centrados. F11 además esconde la barra del navegador; para salir, `F11` o `Esc`.
3. Al llegar a cero suena una vez y la pantalla queda parpadeando con **¡Tiempo!**; detenela con **🔕 Detener alarma**.
4. Compartir copia una URL con la duración (`?t=5:00`) para abrirla en otra máquina. Reiniciar vuelve a 5:00.
5. La pestaña muestra la cuenta atrás en su título, útil para controlarla desde la barra del presentador.

## Pantalla siempre encendida

Al iniciar, Tick pide un **bloqueo anti-suspensión** (el mismo mecanismo que usa YouTube) para que la compu no apague ni bloquee la pantalla. El botón `🔒/⚠️` muestra el estado y permite reintentarlo o apagarlo.

Condiciones:

- Funciona en Chrome, Edge, Firefox y Safari modernos, servido por **HTTPS o `localhost`** (por ejemplo `python3 -m http.server`). Abriendo el archivo con doble clic (`file://`) el navegador no permite el bloqueo.
- El bloqueo se libera si la pestaña se oculta o minimiza; Tick lo pide de nuevo solo al volver.
- Puede ser rechazado por el sistema (ahorro de energía, batería baja): en ese caso se avisa.
- En navegadores viejos sin la API se usa un video oculto en loop como alternativa.
- Ninguna página web puede evitar el cierre de tapa ni la suspensión forzada del sistema: para una proyección larga conviene igual revisar los ajustes de energía de la compu.
