import React, { useState, useEffect } from 'react';

export default function Formularios(){
  //-------------------METODO HERALDO 2K
  // const [nombre,setNombre] = useState("");
  // const [sabor,setSabor] = useState("");
  // const [lenguaje,setLenguaje] = useState("");
  // const [terminos,setTerminos] = useState(false);
  
  // const handleSubmit = e=>{
  //   e.preventDefault();
  //   alert("El formulario se ha enviado")
  // }
  // return(
  //   <>
  //     <h2>Formularios</h2>
  //     <form onSubmit={handleSubmit}>
  //       {/*Elementos input o textarea */}
  //       <label htmlFor="">Nombre:</label>
  //       <input 
  //         type="text" 
  //         id="nombre" 
  //         name="nombre" 
  //         value={nombre}
  //         onChange = {(e)=>setNombre(e.target.value)}/>
  //       {/*  */}
  //       <p>Elije tu sabor favorito de JS: </p>
  //       <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e)=>setSabor(e.target.value)}/>
  //       <label htmlFor="">Vanilla</label><br/>
  //       <input type="radio" id="react" name="sabor" value="react" onChange={(e)=>setSabor(e.target.value)}/>
  //       <label htmlFor="">React</label> <br/>
  //       <input type="radio" id="angular" name="sabor" value="angular" onChange={(e)=>setSabor(e.target.value)}/>
  //       <label htmlFor="">Angular</label> <br/>
  //       <input type="radio" id="vue" name="sabor" value="vue" onChange={(e)=>setSabor(e.target.value)}/>
  //       <label htmlFor="">Vue</label> <br/>
  //       <input type="radio" id="svelte" name="sabor" value="svelte" onChange={(e)=>setSabor(e.target.value)}/>
  //       <label htmlFor="">Svelte</label> 
  //       <p>Elije tu lenguaje de programacion favorito</p>
  //       <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
  //         <option value="">---</option>
  //         <option value="js">JavaScript</option>
  //         <option value="php">PHP</option>
  //         <option value="py">Python</option>
  //         <option value="go">GO</option>
  //         <option value="rb">Ruby</option>
  //       </select>
  //       <br/>
  //       <label htmlFor="terminos">Acepto términos y condiciones</label>
  //       <input type="checkbox" id="terminos" name="terminos" onChange={(e)=>setTerminos(e.target.checked)}/>
  //       <p></p>
  //     </form>
  //   </>
  // )

  //---------------------METODO PROSOR 12K NIVEL TI
  const [form,setForm] = useState({})

  const handleChange = e=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleChecked = e=>{
    setForm({
      ...form,
      [e.target.name]:e.target.checked
    })
  }

  const handleSubmit = e=>{
    e.preventDefault();
    alert("El formulario se ha enviado")
  }

  return(
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        {/*Elementos input o textarea */}
        <label htmlFor="">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={form.nombre} 
          onChange = {handleChange}/>
        {/*  */}
        <p>Elije tu sabor favorito de JS: </p>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange}/>
        <label htmlFor="">Vanilla</label><br/>
        <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>
        <label htmlFor="">React</label> <br/>
        <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange}/>
        <label htmlFor="">Angular</label> <br/>
        <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}/>
        <label htmlFor="">Vue</label> <br/>
        <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange}/>
        <label htmlFor="">Svelte</label> 
        <p>Elije tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
        <p></p>
      </form>
    </>
  )



}