import React, {Component} from "react"
import data from "./helpers/data.json"
import { func } from "prop-types";

export default class RenderizadoElementos extends Component{
  constructor(props){
    super(props);
    this.state = {
      seasons: ["primavera", "verano", "otoño", "invierno"]
    }
  }
  render(){
    return(
      <div>
        <h2>Renderizado Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ul>
          {this.state.seasons.map(el=><li key={el}>{el}</li>)}
        </ul>
        <h3>Frameworks Front JS</h3>
        <ul>
          {data.frameworks.map(el=> <ElementoLista key={el.id} el={el}/>)}
        </ul>
      </div>
    )
  }
}


function ElementoLista(props){
  return (
    <li >
      <a href={props.el.web} target="_blank">
        {props.el.name}
      </a>
    </li>
  )
}