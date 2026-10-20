# Proporciones

Calculadora minimalista para resolver cálculos cotidianos de porcentajes, variaciones, regla de tres y relaciones entre cantidades. Los resultados se actualizan al escribir y se pueden copiar con un toque.

## Modos

- **Porcentaje**: cuánto es un porcentaje de un valor. Ejemplo: 15 % de 800 = 120.
- **Qué %**: qué porcentaje representa una cantidad respecto de otra. Ejemplo: 30 de 200 = 15 %.
- **Variación**: aumento o disminución entre dos valores, con porcentaje, diferencia absoluta y factor.
- **Regla de 3**: resuelve `A : B = C : X` a partir de A, B y C.
- **Relación**: reparte una cantidad o un total según una relación de partes, como `3:1` o `2:3:1` (entre 2 y 8 partes). Admite decimales.

Cada modo incluye un gráfico de barras cuando los valores lo permiten.

## Uso

1. Abrir `index.html`.
2. Elegir el modo en las pestañas.
3. Escribir los valores: el resultado y el gráfico se actualizan solos.
4. Usar **📋 Copiar** para copiar el resultado, o **🔗 Compartir** para copiar un enlace con el estado.

La unidad es opcional: si se completa, se agrega a los resultados y a las operaciones.

## Estado

El estado se guarda en `localStorage` bajo la clave `proporciones`. Al abrir un enlace compartido no se sobrescribe lo guardado hasta que se edita algún valor.

Parámetros de la URL:

- `?modo=porcentaje&p=15&v=800&u=kg`
- `?modo=relativo&a=30&b=200`
- `?modo=variacion&d=100&h=125&u=kg`
- `?modo=regla&a=2&b=6&c=5&u=kg`
- `?modo=relacion&r=3:1&base=parte&i=1&v=250&u=g`

El botón **🗑️ Reiniciar** pide confirmación en dos toques, borra el estado guardado y vuelve a los ejemplos.
