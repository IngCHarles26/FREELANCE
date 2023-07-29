import React,{useState,useEffect} from 'react';


export default function ScrollHooks(){
  const [scrollY,setScrollY] = useState(0);
  //Cada que se necesite renderizar este componente, se va a ejecutar todo lo que está en la funcion useEffect
  /*El código de abajo muestra el scroll vertical de la página, el defecto es que se tiene que agregar una linea de código DOM  */
  useEffect(()=>{
    console.log("Fase de Actualizacion");
    const detectarScroll= ()=>setScrollY(window.pageYOffset);  
    
    window.addEventListener("scroll",detectarScroll)
  });
  /*useEffect recibe un segundo parámetro, si no se especifica, se renderiza cada que se actualiza el componente, para que solo se llame solo en la fase de montaje se utiliza un array vacio como segundo parametro*/
  //si no le pasas el segundo parametro es como un componentDidUpdatel, cada que se vuelva a renderizar el componente se va a ejecutar todo lo que está dentro de la funcion
  //si le pasas el segundo parametro con una variable, solo se va a ejecutar cada vez que esa variable cambie (update)
  //si le pasas un arreglo vacio, solo se va a ejecutar 1 vez (montaje)
  //Cuando se le agrega un return, React considera que es un state para la fase de desmontaje
  
  useEffect(()=>{
    console.log("Fase de Montaje")
  },[])
  useEffect(()=>{
    console.log("Fase de Actualizacion")
  })
  useEffect(()=>{
    return ()=>{
      console.log("Fase de Desmontaje")
    }
  })
  return(
    <>
      <h2>Hooks - useEffect y el cilo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  )
}