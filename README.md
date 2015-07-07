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
