import React, { Component } from 'react'; //atajo imrc para importar todo ese texto

function Pokemon(props){
  return(
    <figure>
      <img src={props.avatar} alt={props.name}/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default class AjaxApis extends Component{
  state = {
    pokemons: [],
  }
  componentDidMount(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(res=>res.json())
      .then(json=>{
        // console.log(json);
        json.results.forEach(el=>{
          fetch(el.url)
            .then(res=>res.json())
            .then(json=>{
              // console.log(json);
              let pokemon = {
                id:json.id,
                name:json.name,
                avatar:json.sprites.front_default
              }
              let pokemons = [...this.state.pokemons,pokemon];
              this.setState({pokemons})
            })
        })
      })
  }
  render(){
    return(
      <>
        <h2>Peticiones Asincronas en Componentes de CLase</h2>
        {this.state.pokemons.map((el,ix)=>
          <Pokemon 
            key={ix}
            name={el.name}
            avatar={el.avatar}
          />
        )}
      </>
    )
  }
}


