import React, { useState } from 'react';

export default function ContadorHooks(props){
  const [contador,setContador] = useState(0);
  const sumar = ()=> setContador(contador+1);
  const restar = ()=> setContador(contador-1);
  return(
    <>
      <h2>Contador con Hooks - useState</h2>
      <p>Contador de {props.titulo}: <b>{contador}</b></p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  )
}
//Esta es la manera de setear parametros por defecto
ContadorHooks.defaultProps = {
  titulo:"clicks"
}