import React from "react";

const Test = () => {
    function mostrarTarea (){
        fetch ("https://playground.4geeks.com/todo/users/NahuelPerrone")
        .then ((response) => response.json ())
        .then ((data)=> console.log(data))
    }
    
    function agregarTarea (){
        fetch ("https://playground.4geeks.com/todo/users/NahuelPerrone")   
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                label: 'Ir a dormir',
                is_done: false
            }),
                 
                   .then((nuevaTarea) => nuevaTarea.json())
                    .then((data) => console.log(data));
    }


    return (
        <>
        <h1>Test</h1>

        <button onClick= {(mostrarTarea)} >Mostrar</button>
        <button onClick= {(agregarTarea)}>Agregar</button>
        </>
    )
}
export default Test


{/* <button onClick= (EliminarTarea)>Eliminar</button>  */}