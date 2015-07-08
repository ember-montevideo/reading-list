# Paso a paso

## 1. Copiar assets y HTML

```sh
$ cp ../../ten/dist/reading-list/stylesheets/main.css app/styles/app.css
$ cp ../../ten/dist/reading-list/index.html app/templates/application.hbs
```

Y dejar en el template solo la parte del contenido.

## 2. Obtener la lista de libros de un modelo

Copiamos la lista de modelos del README de `ten` y le agregamos un atributo
`shelves` a cada libro.

Listamos todos los libros de una para ver como conectamos el modelo con el
template.

## 3. Pasar la lista de libros a un componente

Y que filtre la lista de libros por un `shelve`.

Primero muevo el template al componente y veo como se engancha facil.
Luego creo una propiedad calculada para filtrar la lista. Ahí me doy cuenta
que preciso que los modelos sean Ember.Object.

También aprovecho para ordenar la lista.

## 4. Reemplazo todos los listados por el componente

Reemplazo y hago que se filtre por el shelve que le paso al componente

## 5. Creo la ruta next

Vemos que la ruta de inicio es `index` y no `application`
Vemos como las rutas y los templates se anidan

## 6. Agregar las rutas `to buy` y `history`

Es lo mismo
