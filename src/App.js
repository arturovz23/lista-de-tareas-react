import React, {useState} from 'react'
import './App.css';
import Header from './componentes/Header'
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas'

function App() {

  const[tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      } 
    ]
  )

    console.log(tareas);

  return (
    <div className='contenedor'>
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
    

  );
}

export default App;