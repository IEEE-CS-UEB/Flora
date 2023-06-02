<img src="https://i.imgur.com/46uy49b.png">

Flora es una librería de Estilos (CSS) y Componentes (Web Components) para construir aplicaciones para la comunidad universitaria de la UEB con un diseño de UI sencillo pero atractivo, igual al de Aula Virtual.

Lo único que necesitas para empezar a hacer uso de Flora es importar el estilo o el componente que quieras en el <head> de tu HTML. Eso es todo.

# Hojas de estilos

### flora.css

La hoja de estilos principal

```html
  <link rel="stylesheet" href="https://ieee-cs-ueb.github.io/Flora/src/css/flora.css" />
```

### flora.icons.css

La hoja de estilos que incluye toda la colección de íconos Phosphor, la cual puedes utilizar mediante la clase `.Icon`

```html
  <link rel="stylesheet" href="https://ieee-cs-ueb.github.io/Flora/src/css/flora.icons.css" />
```

# Componentes

### focusedImage.js

Una imagen focal con un montón de validaciones para hacer su implementación aprueba de tontos.

```html
<script type="module" src="https://ieee-cs-ueb.github.io/Flora/src/wc/focusedImage.js"></script>
```

```html
<focused-image src="https://i.imgur.com/sxskFZ6.jpeg"
    alt="Estudiantes del capítulo Computer reunidos con nuevos integrantes"
    width="500px" aspectratio="16/9"
    bgposition="center" displayalt="true">
</focused-image>
```

### passwordInput.js

Un campo de contraseña para tus formularios.. O para usarlo solito, como quieras.

```html
<script type="module" src="https://ieee-cs-ueb.github.io/Flora/src/wc/passwordInput.js"></script>
```

```html
<password-input id="ExamplePwdInput" name="password" label="Password" width="200"></password-input>
```