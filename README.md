<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/205271121-690e5b6e-6b37-4946-ab4a-07a7cd363eb9.png">

# Módulo 3: Ejercicio de evaluación intermedia

En este repositorio se presenta el ejercicio de evaluación intermedia de Elena Clemente Rentero para el tercer módulo de programación con React del curso de desarrolladora front-end impartido por Adalab.

## Descripción 

El ejercicio consiste en desarrollar una aplicación web sencilla con React que nos permite visualizar todas las compañeras que somos en esta promoción, acompañadas por nuestro nombre, tutora, especialidad y redes sociales. 

## Funcionamiento

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/205271311-378e3572-4bba-41fd-a153-b7a404ccb49d.png">

- **Visualización de las Adalabers**: Permite ver en modo tabla todas las Adalabers de la promoción R extraidas de la la siguiente API: https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json. Por cada Adalaber se visualiza una fila donde se muestra su nombre, su tutora, su especialidad y sus redes sociales.

- **Añadir a una nueva Adalaber**: Además el usuario tiene la opción bajo la tabla de añadir nuevas Adalabers, para lo cual solo debe rellenar los campos de nombre, tutora y especialidad. El botón de añadir una nueva Adalaber no funciona a no ser que se rellenen los tres campos requeridos. Una vez la usuaria rellene los campos y pulse en el botón, esta nueva Adalaber aparecerá al final del listado de alumnas. 

- **Filtrar el listado de Adalabers**: La página también permite filtrar las alumnas por nombre y por tutora, el filtro no es case sensitive y si anteriormente hemos añadido a una nueva Adalaber al filtrar también se mostrarán.

- **Enlaces a las redes sociales**: Asimismo, cada fila muestra una columna de redes sociales, que está completa en aquellos casos en los que el servidor arroja información sobre las redes sociales de las Adalabers. Al hacer click en en las redes nos lleva al perfil correspondiente.

## Si te gustaría instalarlo, sigue esta guía de inicio rápido

Este proyecto se ha realizado utilizando **React**. Para poder utilizarlo en tu ordenador debes: 

1. **Clona este repositorio en tu ordenador**.
1. **Ábrelo en tu editor de código**.
1. A continuación **abre una terminal e instala las dependencias** locales ejecutando en la terminal de comando: 

```npm install```

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm start```

Este comando abre una ventana de Chrome y muestra tu página web en **http://localhost:3000**.

Después de ejecutar ```npm start``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente. 
