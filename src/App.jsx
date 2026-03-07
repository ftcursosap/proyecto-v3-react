import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const nombre = "Alan";
  var edad = 29;
  const colores = ["Naranja", "Verde", "Rojo", "Azul"];
  return (
    <div>
      <h1>Hola {nombre}, estas en React</h1>
      <h2>{nombre}</h2>
      <p>Este es mi primer JSX en React.</p>
      <p>Mi nombre es Alan</p>
      <p>Mi edad en 5 años sera: {edad + 5}</p>
      <button>Presiona este boton</button>
      <ul>
        <li>{colores[0]}</li>
        <li>{colores[1]}</li>
        <li>{colores[2]}</li>
        <li>{colores[3]}</li>
      </ul>
      <ul>
        <li>Alma</li>
        <li>Irma</li>
        <li>Itzel</li>
      </ul>
    </div>
  );
}

export default App
