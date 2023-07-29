import React, {Component} from "react";

export class EventosES6 extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador:0
    }
    // this.sumar = this.sumar.bind(this)
    // this.restar = this.restar.bind(this)
    /*Para obviar este bindeo, se pueden declarar las fuciones despues de render() y antes de return, por lo que se obvia el "this" necesario de la clase */
  }

  // sumar(e){
  //   this.setState(
  //     {contador:this.state.contador+1}
  //   )
  // }
  // restar(e){
  //   this.setState(
  //     {contador:this.state.contador-1}
  //   )
  // }

  render() {
    const sumar = () => {
      this.setState(
        {contador:this.state.contador+1}
      )
    }
    
    const restar = () => {
      this.setState(
        {contador:this.state.contador-1}
      )
    }
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>

          <button onClick={sumar}>+</button>
          <button onClick={restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class EventosES7 extends Component{
  //PROPERTY INITIALIZERS
  /*Utilizamos la nueva sintaxis, utilizando las arrowfunction evitamos utilizar el metodo find, gracias a que las "=>" eredan el objeto this del ambiente donde han sido declaradas*/
  state = {
    contador:0
  }

  
  sumar = ()=>{
    this.setState(
      {contador:this.state.contador+1}
    )
  };
  restar = ()=>{
    this.setState(
      {contador:this.state.contador-1}
    )
  }

  render(){
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>

          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class MasEventos extends Component{

  handleClick = (event,mensaje)=>{
    console.log(event) //Evento de react
    console.log(event.nativeEvent) // Evento de nativo JS
    //Para pasar un parametro desde un evento
    console.log(mensaje)

  }
  
  render(){
    return(
      <>
        <h2>Mas Sobre Eventos</h2>
        {/* <button onClick={this.handleClick}>Saludar</button> */}
        {/* //Para pasar un parametro desde un evento  */}
        <button onClick={(e)=>this.handleClick(e,"mensaje de prueba para parametro desde evento")}>Saludar</button>
        {/*Evento personalizado */}
        <Boton onClick={(e)=>this.handleClick(e,"mensaje de prueba para parametro desde evento")}/> {/*ESTO ESTA MAL */}
        <Boton myOnClick={(e)=>this.handleClick(e,"mensaje de prueba para parametro desde evento")}/>
      </>
    )
  }
}


//Siempre los componentes usan la primera letra en mayuscula
function Boton(props){
  return <button onClick={props.myOnClick}>Boton hecho componente</button>;
}