import React, { useState } from 'react';
import './ListaTareas.css';
import TareaFormulario from '../TareaFormulario/TareaFormulario';
import Tarea from '../Tarea/Tarea';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }

            return tarea;
        });

        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario agregarTarea={agregarTarea}/>

            <div className='tareas-lista-contenedor'>
                {
                    tareas.map(({ id, texto, completada}, i) => 
                        <Tarea 
                            key={i}
                            id={id}
                            texto={texto}
                            completada={completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;