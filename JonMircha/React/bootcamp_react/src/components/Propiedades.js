import React from "react";
import PropTypes from "prop-types"



export default function Propiedades(props){
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true":"false"}</li> 
        {/* los elementos booleanos no son visibles */}
        <li>{props.array.join(",")}</li>
        <li>{props.objeto[1]}</li>
        <li>{props.react_element}</li>
        <li>{props.array.map(el=>props.funcion(el)).join(",")}</li>
        <li>{props.react_component}</li>

      </ul>
    </div>
  );
}

/*Si se desea definir propiedades por defecto, utilizamos lo siguiente */

Propiedades.defaultProps = {
  porDefecto: "LasProps",
  
}

/* para instalar las proptypes utilizamos el comando "npm i -s prop-types" lo cual nos permite validar el tipo de props que vamos a recibir de otro elemento 
En el ejemplo de abajo, se indica que la propiedad numero debe ser de tipo number y que debe ser requerida*/
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
}