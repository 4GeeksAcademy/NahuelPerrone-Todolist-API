import React from "react";

const Test = () => {
    function mostrarTarea (){
        fetch ("https://playground.4geeks.com/todo/users/NahuelPerrone")
        .then ((response) => response.json ())
        .then ((data)=> console.log(data))
    }
    
    function agregarTarea() {
        const nuevaTarea = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                label: 'Leer',
                is_done: false
                }) 
            }
             fetch ("https://playground.4geeks.com/todo/todos/NahuelPerrone", nuevaTarea)
             .then((nuevaTarea) => nuevaTarea.json ())
             .then((data) => console.log(data));
    }

    function eliminarTarea () {
        const requestOptions = {
                 method: "DELETE",
                 redirect: "follow"
                 };
 
                 fetch("https://playground.4geeks.com/todo/todos/", requestOptions)
                 .then((eliminarTarea) => eliminarTarea.text())
                 .then((result) => console.log(result))
                         }
    

    return (
        <>
        <h1>Test</h1>

        <button onClick= {(mostrarTarea)} >Mostrar</button>
        <button onClick= {(agregarTarea)}>Agregar</button>
        <button onClick= {(eliminarTarea)}>Eliminar</button> 
        </>
    )
}
export default Test
