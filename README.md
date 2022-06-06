# Breaking-Bad-Wiki
Breaking Bad Wiki Lite.

--- Pasos para su ejecución ---

  - Tener configurado "Node.js" como entorno.
  - Ejecutar la aplicación:
      Es necesario descargar el repositorio y abrir la carpeta del proyecto en un editor de código.
      Ejecutar en el editor de comandos el comando "npm start", a continuación se abrirá en el navegador el proyecto en la ruta "localhost:3000".

--- Elementos utilizados ---
  - La aplicación está construida con React, utilizando "Material UI" como librería de componente visual.
  - La navegación en la aplicación esta basada en una "SPA" a través de la librería "react-router-dom".
  - Para la traducción se ha implementado la librería "react-i18next". Los idiomas displonibles son el español y el inglés.
  - Como manejadores generales de estado se utiliza "react-redux" con "Redux toolkit" para tener una configuración un poco más sencilla. También se utiliza en partes   de código mas simples los reducers propios de react.
  - Para las ejecuciones de testing se utliza "Jest".
  - Utilización de SCSS para la creación de estilos

--- Explicación del proyecto ---

El proyecto consta de 4 vistas o rutas:
  - "/" Ruta de bienvenida al proyecto con una breve descripción del producto
  - "/characterslist" Ruta donde se muestra una lista con todos los personajes de la serie, con su imagen y nombre.
  - "/profile/${profileId}" Ruta donde se muestra todos los datos propios del usuario seleccionado
  - "/pageNotFound" Ruta de error que se muestra cuando se intenta acceder a una ruta desconocida de la aplicación o cuando alguna llamada de la API falla.

En cuanto a la organización, el proyecto se divide en:
  - "/src/index.js": Fichero principal donde de cargan los ficheros globales de la aplicación. Encontraremos la carga del componente para las traducciones y su inicialización a través del fichero "translationsHook.js", donde encontramos toda la lógica que en las que derivan las traducciones.
  - "app.jsx": Fichero donde se carga el "store" y los componentes "Header, Body y Footer" que dan la estructura.
  - Carpeta assets: Carpeta donde se guarda todos los ficheros correspondientes con imagenes, como las banderas para el cambio de idiomas e imagenes como el logo.
  - Carpeta hooks: Consiste en dos ficheros "translationsHook" donde se inicializa y gestionan funciones acordes con las traducciones. Fichero "charactersListHook" donde se realiza la gestión de cambios de estado (reducers), en este fichero hay codigo comentado ya que esté mismo se ha desplazado hacia funcionalidad del store.
    · charactersListHook: utlizado para la gestion de estado del loader principal de la página, el cuál se utiliza hasta que las llamadas a la API estén lista con datos. La intención de este fichero es que todo el flujo de interacción sea gestionado a través de una función general para así obtener el estado y la función del cambio del mismo.
  - "/services/apiCalls.js: Fichero donde se gestionan todas las llamadas a la API, con la intención de tener las llamadas globalizadas en un mismo fichero y asi facilitar su busqueda o manipulación.
  - Carpeta Store: Consta de 1 carpeta "characters" donde hay un "index.js" en el cual contiene el store principal y único de la aplicación, este fichero está en una carpeta propia ya que la intención, en caso de poseer más stores, era la de tenerlos lo más diferenciado posible. En este fichero se encuentran funciones para settear al store la lista de personajes "setCharactersList", para settear la informacion del personaje que queremos ver mas en profundidad "setCurrentUser", para limpiar el propio store a la hora de cambiar de personaje "resetCurrentUser", y otra función, para añadir más información a un determinado personaje si la información no habia sido fijada anteriormente "setCharacterData".
  - La intención con este store es la de evitar el continuo uso de llamadas a la API y así evitar su sobrecarga. Partimos de un store con la información básica de usuarios, una vez vayamos al perfil de un personaje en específico, obtenemos la información mas detallada del mismo y se la anexamos al store previo, de esta manera, vamos aumentando la información de los personajes, añadiendola al store y asi las próximas veces que querramos obtener dicha información no necesitamos volver a llamar a la API, ahorrandonos tiempo de carga y posibles fallos con la misma.
  - Carpeta styles: Se encuentran los ficheros de estilo de la aplicación, cada uno corresponde con un componente, hay un fichero "globals.scss" donde, como su nombre indica, están los estilos globales que se utilizan en toda la aplicación, como scrollbars, colores, fuente, etc.
  - Carpeta translations: Carpeta dividida en dos subcarpetas correspondientes con cada idioma que posee la aplicación, cada subcarpeta posee a su vez un fichero "global.json".
  - Carpeta Components: Se encuentran todos los componentes de la aplicación junto con sus correspondientes ficheros de tests.
      - Header: Navbar de la aplicación donde se encuentra el cambio de idioma.
      - Footer: Pie de la aplicación donde se puede ver las redes sociales.
      - Body: Cuerpo de la aplicación donde transcurre el funcionamiento principal y se inicializan el sistema de rutas para la navegación.
      - chractersList: Lista de usuarios (imagen y nombre), con un botón para acceder a su perfil. En su inicio se muestra un loader (<Loader />), que posteriormente se oculta con la información obtenida. La intención es que el "loader" se mostrado cuando no haya información en el store (dataLoaded === false), si es asi, se realiza llamada a la API, se rellena el store y a continuación se oculta el loader.
      - characterProfile: Vista donde se muestra la información detallada del personaje seleccionado, se muestra el loader principal si no hay información a mostrar. Se muestra una frase famosa del personaje (si la posee) con un icono para traer una frase aleatoria del personaje "getCuote", la intención con esta función es tratar de obtener una frase distinta a la que ya se tiene, revisando la nueva respuesta con la anterior y si es así volver a ejecutar la llamada, todo esto bloqueando el botón mientras la llamada está en curso para evitar multiclicks.
      - pageNotFound: Vista a mostrar cuando occure algun error en la aplicación, ya sea a la hora de intentar acceder a una ruta desconocida o si falla alguna llamada a la API.
      - welcome: Vista principal de la aplicación con una breve descripción.
      - imageCardWrapper: Componente para la renderización de la imagen del personaje utilizada tanto para la vista de la lista (charactersList) como para la del perfil (characterProfile).
      - loader: Componente donde se renderiza el loader general de la aplicación.
      - Ficheros .test: Ficheros que corresponden a través de su nombre a un componente. Encargados de la ejecución de test en estos mismos. Estos ficheros están actu  almente en una fase de desarollo baja.
      - Carpeta test: Carpeta donde se encuentra el fichero de configuración para la ejecución de testing, configurado con el store y las rutas necesarias.             
