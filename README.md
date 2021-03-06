# Rutas y componentes

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

## 7. Arreglamos el estilo para que agarre el 100% en altura

## 8. Agregamos la ruta search

Agrego la ruta y el template. Agrego la subruta result y vemos como funciona
Luego agrego la accion search y la engancho con el valor del input

## 9. Leer resultados del servicio web

La URL es https://openlibrary.org/search.json?q=the+lord+of+the+rings donde tenemos
que usar + en vez de espacios.

El formato del resultado tiene la siguiente estructura:

Un primer nivel con la cantidad de resultados

```
{
    "numFound": 629,
    "docs": [
        {...},
        {...},
        {...},
        ...
        {...}]
}
```

y cada resultado dentro de `docs` tiene el siguiente formato

```
{
    cover_i: 258027,
    has_fulltext: true,
    edition_count: 120,
    title: "The Lord of the Rings",
    author_name: [
        "J. R. R. Tolkien"
    ],
    first_publish_year: 1954,
    key: "OL27448W",
    ia: [
        "returnofking00tolk_1",
        "lordofrings00tolk_1",
        "lordofrings00tolk_0",
        "lordofrings00tolk_3",
        "lordofrings00tolk_2",
        "lordofrings00tolk",
        "twotowersbeingse1970tolk",
        "lordofring00tolk",
        "lordofrings56tolk",
        "lordofringstolk00tolk",
        "fellowshipofring00tolk_0"
    ],
    author_key: [
        "OL26320A"
    ],
    public_scan_b: true
}
```

Configurar CORS

```
if (environment === 'development') {
  ENV.contentSecurityPolicy = {
    'default-src': "'self' http://localhost:4200",
    'connect-src': "'self' http://localhost:4200 https://openlibrary.org"
  }
}
```

Tips

Para usar JSONP y limitar la cantidad:

```
return $.getJSON('https://openlibrary.org/search.json?q=' + term + '&limit=30&callback=')
```

## 10. Show spinner on searching

Agregar el template loading...

Se puede usar un spinner de aca http://tobiasahlin.com/spinkit/

# Ember data

Para esta sección puedes utilizar una versión online del API en
https://reading-list-api.herokuapp.com

## 1. Crear un modelo para books y configurar el adaptador REST

Levantamos el servidor de desarrollo con la configuración de proxy y apuntamos
a nuestro servidor API `ember serve --proxy http://localhost:3000`. Estamos
asumiendo que nuestro servidor API está levantado en localhost:3000.

Creamos el modelo con las propiedades básicas y luego configuramos el adaptador
a REST adapter.

Al configurar REST adapter a nivel de application estamos configurando que es el
adaptador por defecto para todos los modelos.

## 2. Formato de fecha

Usamos el addon ember-moment que utiliza la librería momentjs para formatos de
fechas.

```
ember install ember-moment
```

## 3. Migrar el buscador a ember-data

Separar la implementación actual del buscador en un adaptader, un serializador y
un modelo.

## 4. Crear un libro a partir del resultado de una búsqueda

Creamos una acción en los resultados de la busqueda y creamos un nuevo libro con
el resultado seleccionado. Luego guardamos el nuevo libro, una vez guardado
navegamos a la lista de `next to read`.

## 5. Add book detail page with delete action

Crear la ruta con el template y luego agregar un comando que elimine un
registro.
