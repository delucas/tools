# Sauriopass

Generador de contraseñas fáciles de recordar, en castellano: un animal, un adjetivo y unos números. Inspirado en [DinoPass](https://dinopass.com/), con las listas de [sauriopass](https://github.com/sipofcode/sauriopass_py).

## Uso

1. Elegí **🙂 Dame una simple** (animal + adjetivo + 2 números) o **💪 Dame una fuerte** (animal + adjetivo + 3 números + 1 símbolo, estilo `l33t`).
2. Copiala con **📋 Copiar**. Cada botón genera una nueva y recuerda tu modo favorito.
3. La página genera una al cargar para no arrancar vacía.

## Privacidad y seguridad

- Todo se genera en tu navegador con `crypto.getRandomValues`; nada viaja a ningún servidor.
- Las contraseñas **nunca** se guardan: en `localStorage` solo vive tu modo favorito (`sauriopass`), que también viaja con el Escritorio.
- Nota honesta: las simples (~21 bits) sirven para cosas casuales; para email o banco preferí las fuertes… y mejor aún un gestor de contraseñas.
