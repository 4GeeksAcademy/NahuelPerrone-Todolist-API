import React, { useState } from "react";


const List = () => {
    const [valor,setValor]= useState()

    const formulario = (e)=> {
        setValor({...valor,[e.target.valor] : e.target.valor});
    }

    return(
        <>
        <h1>imput </h1>
        <input type="text" value={valor} onChange={(e)=>{setValor(e.target.value)}} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
       <ul>
        <li><p>texto {valor}</p></li>
        <li><p>texto</p></li>
        <li><p>texto</p></li>
       </ul>
       
        </>

    )
};
export default List