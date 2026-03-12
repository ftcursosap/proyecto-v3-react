import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  function manejarCambio(e) {
    setTexto(e.target.value);
  }

  function agregarTarea() {
    if(texto.trim() === "") return;

    setTareas([...tareas, texto]);

    setTexto("");
  }

  function eliminarTarea(index) {
    const nuevasTareas = tareas.filter((_, i) => i !== index);

    setTareas(nuevasTareas);
  }

  return (
    <div>
      <h1>Mi lista React</h1>

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
          <li key={index}>
            {tarea}

            <button onClick={() => eliminarTarea(index)}>
              Eliminar
            </button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
