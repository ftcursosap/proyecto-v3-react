import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const nombre = "Alan";
  
  const frutas = ["Manzana", "Pera", "Mango", "Platano"];

  return(
    <div>
      <h1>Lista de frutas</h1>

      <ul>
        {frutas.map(function(fruta, index) {
          return <li key={index}>{fruta}</li>;
        })}
      </ul>
    </div>
  );
}

export default App
