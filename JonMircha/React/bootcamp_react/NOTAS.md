[2605minutos]

# DIA JUEVES 27
  **20:00-22:50**
  01  Create React App                              42
  02  Sintaxis JSX                                  27
  03  Componentes                                   18
  04  Propiedades                                   30
  05  Estado                                        19
  06  Renderizado Condicional                       09  ==> Renderizado de elementos
# DIA VIENRES 28
  **07:00-...**
  07  Renderizado de Elementos                      23
  08  Eventos & Binding                             23
  09  Eventos & PropertyInit                        12
  10  Tipos de Eventos                              19
  11  Comunicacion entre Componentes                27
  12  Ciclo de Vida de Componentes                  33
  13  Peticiones Asincronas                         25
  14  Hooks                                         20
  15  Hook useState                                 18    ContadorHooks.js
  16  Hook useEffect 1/2                            26    ScrollHooks.js
  17  Hook useEffect 2/2                            23    RelojHooks.js
  18  Peticiones Asincronas con Hooks               20    AjaxHooks.js        =>  CustomHooks
  

  

`Se puede descargar la extension React Developers Tools para visualizar los componentes de la página`
`Simple React Snippets es una extension para facilitar elaborar código con React`
`React tras bambalinas tiene su archivo de configuracion webpack, `
`Las Key van a los elmentos jsx`
`Un componente se renderiza cuando le pasas propiedades o cuando se actualiza su estado`

# COMANDOS CREATE REACT APP
  **npm start** => Inicia el servidor de desarrollo y abre un navegador con la aplicacion, utiliza por defecto el puerto 3000
  **npm run test** => Ejecuta las pruebas, se pueden presionar letras cuando el test ya haya corrido: [a] correr todos los test, [f]correr solo los test fallados, [q]salir del modo vista, [p]filtrar por el patron regex de la carpeta y [t] filtrar por el patron regex de los test
  **npm run build** => Empaqueta la aplicacion para produccion en la carpeta `build`, genera una carpeta que es la que se va a subir al servidor, por lo que las carpetas "publick" y "scr" solo se usan para ambientes de desarrollo, utiliza por defecto el puerto 5000, compila toda la aplicacion a VanillaJS
  **npm run eject** => Permite cambiar manualmente las librerias y configuracion que utiliza CRA por default. Este comando no tiene vuelta atras

# ATRIBUTOS REEMPLAZADOS
  class   =>    className
  for     =>    htmlFor

# JSX
  Es una sintaxis JS que nos va a producir elementos de REACT, !no es HTML! pero tiene atributos diferentes a las etiquetas html, se parece un poco a XML, REACT internamente transforma los elementos JSX a etiquetas HTML [todos_los_elementos_deben_de_estar_contenidos_en_un_elemento_padre], para utilizar código JS dentor de un elemento, debemos de utilizar `{...}`; cada elemento debería tener un atributo `key` para identificarlo a lo largo de la generacion del proyecto; para generar elementos dinámicos se utiliza obligatoriamente el método `map` para arreglos

# COMPONENTEs
  Es una interaz de usuario que tiene contenido, estilos y funcionalidad; los componentes pueden o no tener estados (variables que puede tener), además puede tener propiedades (objeto que se le pasa al componente para que realice una funcion); se pueden definir los componentes como clase o como funcion.
  Los componentes tienen que tener la primera letra en mayusculas, además tienen que ser exportados entre llaves

# PROPIEDADES
  Las proopiedades son valores que recibe un componente hijo de un componente padre a traves del objeto props, es similar a agregar una etiqueta al elemento JSX, puede recibir: `strings numbers booleans arrays objects functions elementos_react y componentes_react`, se pueden definir propiedaes por defecto (que no necesaraimente sean enviadas del elemento padre).

# ESTADO
  El estado es el conjunto de variables o componentes que intervienen en la modificacion de un componente, tiene las siguientes caracteristicas `es inmutable, no lo podemos modificar  directamente y es asincrono`, el estado es un objeto; el cambio de un estado hace que se actualice el DOM

# RENDERIZADO CONDICIONAL
  Se utilizan cuando se desea mostrar un elemento dependiendo de una condicion, se puede utilizar una terna

# RENDERIZADO DE ELEMENTOS
  Los elementos se renderizan con la propiedad map, cuando se tiene un array como prop de ingreso

# EVENTOS NATIVOS, SINTETICOS Y PERSONALIZADOS
  React envuelve un evento nativo del navegador dandole soporte, tiene la caracteristica de que se tiene un mejor control del evento, ese mejor control es gracias a SyntheticBaseEvent. Un evento personalizado

# COMUNICACION ENTRE COMPONENTES
  PADRE - HIJO => 
  HIJO - PÄDRE =>
  NO RELACIONADOS => Los portales permiten enviar informacion entre componentes diferentes del DOM

# CICLO DE VIDA DE COMPONENTES
  Son metodos especiales para ejecutar ciertas funcionalidades de manera inmediata, tiene tres fases (montaje, actualizacion y desmontaje), dentro de estas tres fases tenemos metodos (componentDidMount(), componentDidUpdate() y componentWillUnmount())

# HOOKS
  Esta disponible desde la version 16, es una manera que nos va a permitir enganchar el estado y el ciclo de vida para conmponentes funcionales, ya que antiguamente estos componentes solo eran usados para imprimir propiedades; los hooks no hacen que una app sea mas rápida; tenemos los siguientes hooks `useState useEffect`y los avanzados `useContext useRef useReducer useCallback useMemo`, además de hooks personalizados
    useState => devuelve un arreglo con dos posiciones [valor, setValor], por cada valor que se tenga en el estado, se cree uno
    useEffect => nos permite representar el ciclo de vida de los componentes de clase (mount update y willunmount)