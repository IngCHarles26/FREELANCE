import React, {Component} from "react";

//componente tipo clase

class Componente_c extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <h2>{this.props.msg}</h2>;
  }
}

//componente tipo funcion

function Componente_f(props){
  return <h2>{props.msg + "prueba"}</h2>;
}

export {Componente_f,Componente_c};