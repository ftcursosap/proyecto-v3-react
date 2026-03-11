import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState("");

  function manejarCambio(evento){
    setTexto(evento.target.value);
  }

  return (
    <div>
      <h1>Formulario React</h1>
      <h2>Mi primer formulario en React</h2>

      <input 
        type="text" 
        value={texto}
        onChange={manejarCambio} 
        placeholder='Escribe un texto'
      />

      <p>Escribiste: {texto}</p>
      <p>Cantidad de letras: {texto.length}</p>
    </div>
  )
  
}

export default App
