# Localhostificalo

Convertí una URL online en su versión local para depurar más rápido. Le das una URL y un puerto, y arma la URL equivalente contra `localhost` conservando el path, la query y el hash.

```text
https://app.ejemplo.com/checkout?step=2#resumen  +  3000
        ↓
http://localhost:3000/checkout?step=2#resumen
```

No hace proxy, no modifica la aplicación y no verifica si el servidor local está corriendo: solo construye la URL.

## Uso

1. Abrir `index.html` o entrar desde el índice de herramientas.
2. Pegar la URL online en **URL online**. Si no ponés esquema, se asume `https://`.
3. Elegir el **puerto local**. El valor por defecto es `3000`.
4. Ajustar el **host** (`localhost`, `127.0.0.1` o `::1`) y el **protocolo** local (`http` o `https`) si hace falta.
5. Usar `📋 Copiar` o `↗ Abrir` con el resultado.

Debajo de cada campo aparecen los errores de validación. El resultado se actualiza en vivo mientras escribís.

## Reglas de conversión

- Solo se aceptan URLs `http` o `https`.
- Si la URL no trae esquema, se antepone `https://`.
- El puerto tiene que ser un entero entre `1` y `65535`.
- El puerto de la URL original se reemplaza por el elegido. Si la URL original traía otro puerto, se ofrece un atajo para usarlo.
- El `path` se conserva tal cual, incluido el encoding (`%2F`, etc.).
- La query y el hash se conservan por defecto; se pueden desactivar con sus casillas.
- Si el puerto coincide con el predeterminado del protocolo (`80` para `http`, `443` para `https`), la URL lo omite porque es equivalente.

## Puertos rápidos

Hay atajos para los puertos más habituales (Next/Express, Angular, Astro, Flask, Vite, Django/Laravel, Vue CLI/Spring).

También se pueden agregar puertos propios con un nombre opcional. Los personalizados se guardan en `localStorage` y se pueden quitar con `×`. Los presets no se borran.

## Recientes

Las últimas 8 conversiones se guardan al copiar, abrir o compartir una URL. Un clic en una entrada restaura la URL y el puerto. El botón **Vaciar** limpia la lista.

Se guardan solo en el navegador actual, igual que el resto del estado.

## Bookmarklet

El botón **🏠 Abrir local** se puede arrastrar a la barra de favoritos. Al usarlo desde cualquier página, abre la versión local de esa misma página con el puerto, host, protocolo y opciones elegidas.

El código se puede copiar con **📋 Copiar código**. Algunos navegadores no aceptan pegar `javascript:` a mano en la barra de direcciones; en ese caso hay que crear el marcador y pegar el código en su URL.

## Estado

- Guarda `{ url, puerto, host, proto, query, hash, puertos, historial }` en `localStorage['localhostificalo']`.
- Prioridad: URL (`?url=…&puerto=…&host=…&proto=…&q=1&h=1`) > `localStorage` > valores por defecto.
- Abrir un link compartido no escribe en `localStorage`; los cambios posteriores sí.
- `🔗 Compartir` copia la URL con el estado de la conversión. Los puertos personalizados y el historial no viajan en el link.
- `🗑️ Reiniciar` pide confirmación en dos toques, borra la clave, vuelve a los valores por defecto y limpia el query string.
- Se integra con `💾 Escritorio` del índice raíz por usar la clave del slug.

## Límites

- Solo convierte URLs `http` y `https`; no acepta otros esquemas.
- No hace proxy ni redirige tráfico: el navegador tiene que poder llegar al host y puerto elegidos.
- No comprueba si el servidor local está levantado.
- Cambiar de origen puede afectar cookies, `localStorage`, CORS, redirecciones OAuth y service workers; la herramienta no puede evitarlo.
- Las URLs con tokens en la query quedan guardadas en el navegador si usás el historial o el guardado automático.

## Trivias

Al final de la herramienta hay tres preguntas desplegables sobre `localhost`, el origen y los puertos predeterminados de HTTP y HTTPS.
