import React, { useEffect, useState } from "react";


const List = () => {
    const [tarea,setTarea]= useState("")
    const [tareas,setTareas] = useState ([])
    
   useEffect(() => {
           mostrarTareas();
       }, []);


      const mostrarTareas = () =>{
        fetch ("https://playground.4geeks.com/todo/users/NahuelPerrone")
        .then ((response) => response.json ())
        .then ((data)=> setTareas(data.todos))
    }

      const agregarTarea = (e) => {
        e.preventDefault();
            const nuevaTarea = {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify({
                    label: tarea,
                    is_done: false,
                    }) 
                }
                fetch ("https://playground.4geeks.com/todo/todos/NahuelPerrone", nuevaTarea)
                .then((nuevaTarea) => nuevaTarea.json ())
                .then(() => {
                    setTarea("");
                    mostrarTareas();
                });
    }
         
    function eliminarTarea (id) {
        const requestOptions = {
                 method: "DELETE",
                 redirect: "follow"
                 };
                 fetch("https://playground.4geeks.com/todo/todos/" + id, requestOptions)
                 .then(() => mostrarTareas())
                         }

    return(
        <div className="conteiner bg-secondary-light  m-auto w-100 vh-100">
            <h1 className="text-center text-secondary pt-3">todos</h1>
            <div className= "sombra flex-direction-column w-50  m-auto bg-white pb-3 rounded-1">
            <div className= "sombra flex-direction-column h-50 m-auto bg-white p-3 rounded-1">

                <form onSubmit = {agregarTarea}>
                    <input type="text" name="valor" 
                        value={tarea} 
                        // onKeyDown={intro} 
                        onChange={(e)=> setTarea(e.target.value)} 
                        className="form-control rounded-0 border-0 border-bottom ps-1" placeholder="Add Task"/>
                </form>
                    {tareas.map((t,index) => (
                    <div key={t.id || index} className="elemento border-bottom d-flex justify-content-between align-items-center m-1">    
                        <p  className="m-1">{t.label}</p>
                        <i className="bi bi-x-circle text-danger"
                            onClick={() => eliminarTarea(t.id)}>
                            </i>
                    </div>
                    ))}
                    <p className="mt-2 text-secondary"> {tareas.length} item left </p>
            </div>
            </div>
        </div>

    )
};
export default List


