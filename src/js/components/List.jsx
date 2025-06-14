import React, { useState } from "react";


const List = () => {
    const [tarea,setTarea]= useState("")
    const [tareas,setTareas] = useState ([""])
    function agregar () {
        setTareas ([...tareas,tarea])
 }
    function intro (e){
        if(e.key == "Enter")
            setTarea("")
    }
        function borrar (e){
             e.preventDefault()
                agregar(e)
            }

        const borrarTarea = (Delete) => {
        const eliminar = tareas.filter((s, index) => index !== Delete);
        setTareas(eliminar);
    };
            

            
    return(
        <div className="conteiner bg-secondary-light  m-auto w-100 vh-100">
         <h1 className="text-center text-secondary pt-3">todos</h1>
        <div className= "sombra flex-direction-column w-50 m-auto bg-white p-3 rounded-1">
        <form onSubmit = {borrar}>
         <input type="text" name="valor" value={tarea} onkeyDown={intro} onChange={(e)=>{setTarea(e.target.value)}} className="form-control rounded-0 border-0 border-bottom ps-1" placeholder="Añadir Tareas"/>

                 {tareas.map((t, index) => (
                     <div key={index} className="elemento border-bottom d-flex justify-content-between align-items-center">
                         <p className="m-1 ">{t}</p>
                         <i className="bi bi-x-circle text-danger"
                             onClick={() => borrarTarea(index)}
                             ></i>
                    </div>
                ))}
         </form>
         

        <div>
         <p className="mt-2 text-secondary"> {tareas.length} item left </p>
        </div>
        </div>

        </div>

    )
};
export default List




//   const formulario = (e)=> {
//         setValor({...valor,[e.target.valor] : e.target.valor});
//     }