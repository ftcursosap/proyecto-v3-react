import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  function manejarCambio(e){
    setTexto(e.target.value);
  }

  function agregarTarea(){
    if (texto.trim() === "") return;

    const nuevasTareas = [...tareas, texto];

    setTareas(nuevasTareas);

    setTexto("");
  }

  return (
    <div>
      <h1>Lista de tareas</h1>

      <input 
        type="text"
        value={texto}
        onChange={manejarCambio}
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
