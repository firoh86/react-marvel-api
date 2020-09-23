# React-Marvel_API

23/09/2020 **Alejandro Suárez**

Para esta práctica con la API de Marvel he usado la libreria React, con el único añadido de **Axios** para las peticiones fetch.

La práctica consistía en crear un buscador de Héroes con la API de Marvel. Donde puedas acceder a Información adicional de los heroes mediante una ventana modal.

### Dificultades encontradas durante el ejercicio:

La API  de primeras te provee de public y private key para usar su base de datos mediante fetch, pero no indica en ningún lugar que necesitas dos headers más para usarla sin herrores.
Un TimeStamp y una clave Hash que debes general encriptando a md5 la suma de TimeStamp privatekey Publickey.
-Resuelto rebuscando un poco entre los métodos de busqueda de la API (Documentación en general).

La documentación de la API es algo pesada y no provee la opción de busqueda de heroes salvo por ID.(Cosa complicada a priori para un usuario externo a dicha API).
-Resuelto buscando en foros sobre la API. Se puede resolver usando ente literal en la URL del endpoint para busqueda de Héroes por nombre:
characters?name=


El Ejercicio está correcto en las bases pedidas de funcionamiento y desarrollo.

### Ampliación del proyecto:

En este caso el ejercicio es pequeño y no he tenido mucho tiempo para su desarrollo, con lo que he añadido algunos plus sinmuchas pretensiones.

-Añadido darkmode con custom hooks.
Para un proyecto más grande y escalable podría realizar todo el ejercicio con Context y styledComponents para mejorar su rendimiento y funcionalidad a la hora
de implementar temas de color o idiomas.

Un ancla para volver al header, en este caso el searchbar.
Para un proyecto mayor, lo realizaría con un componente en lugar de aplicarlo directamente al app. Aunque cumpla su función.

-Responsive.
Para este caso en concreto he usado media querys básicas en tres medidas, desktop, tablet y móvil, basandome en mobile first para los dos componentes que lo necesitaban.
El Grid de APP y la ventana modal con la tarjeta de heroe.
En un proyecto más grande las tarjetas heredarían el mísmo componente con comportamientos diferentes en base a su padre.


### Cosas que añadiría para una mejor experiencia:

Implementación de estilo con styled components.
Temas de color más depurados y animaciones tipo smooth.
Back con NodeJS para más control de las peticiones a la API y ocultación total de los apikeys (inaccesibles desde el front).
Componentes especificos para el switch que controla el tema de color y el ancla.
Lazy load basado en el scrollbar para realizar peticiones en segundo plano (wall tipo instagram).
Context o Redux para el control de variables globales, tema de color, idioma, usuarios.

