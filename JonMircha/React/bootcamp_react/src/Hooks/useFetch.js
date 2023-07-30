import { useState, useEffect } from 'react';

export const useFetch = (url)=>{
  const [data,setData] = useState(null);
  const [isPending,setIsPending] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    // try{
    //   let res = await fetch(url);

    //   if(!res.ok){
    //     throw {err:true,status:res.status,statusText:!res.statusText ? "Ocurrio un error":res.statusText}
    //   }
    //   let data = await res.json();
    //   setIsPending(false);
    //   setData(data);
    //   setError({err:false});
    // }catch(err){
    //   setIsPending(true);
    //   setError(err);
    // }
    const getData = async(url)=>{
      let res = await fetch(url);
      let json = await res.json();
    
      json.results.forEach(async(el)=>{
        let res = await fetch(el.url);
        let json = await res.json()
 
        let pokemon = {
          id:json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setData((data)=>[...data,pokemon])
          
      })
    }
    getData(url);
  },[url])

  return {data, isPending, error}
}
