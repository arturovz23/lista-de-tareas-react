//Importaciones del componente
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareCheck, faEdit, faTimes, faSquare} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => { //Estamos mandando a llamar el objeto de 'tarea, toggleCompletada, editarTarea, borrarTarea'

    //Utilizando useState
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto)

    //Utilizamos 'handleSubmint' para que nuestra aplicacion no se actualize constantemente con el preventDefault
    const handleSubmint = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return ( 
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={tarea.completada ? faSquareCheck : faSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompletada(tarea.id)}
            />
            <div className='lista-tareas__texto'>
                {/* Operador ternario -- si editandoTarea es verdadero se muestra formulario, si no muestras solo texto de la tarea */}
                {editandoTarea ? 
                <form action="" className='formulario-editar-tarea' onSubmit={handleSubmint}>
                    <input 
                        type="text"
                        className='formulario-editar-tarea__input'
                        value={nuevaTarea}
                        onChange={(e) => cambiarNuevaTarea(e.target.value)}
                    />
                    <button 
                        type='submit'
                        className='formulario-editar-tarea__btn'>Actualizar</button>
                </form>
                : tarea.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                {/*Boton de editar que switchea el valor de 'editandoTarea' */}
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>
     );
}
 
export default Tarea;