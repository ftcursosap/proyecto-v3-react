import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const edad = 30;
  const lenguajes = ["Javascript", "Python", "C#"];

  return (
    
    <div>
      <h1>Hola Alan</h1>
      <p>Estoy aprendiendo React</p>
      <p>Mi edad es: {edad}</p>

      <ul>
        <li>{lenguajes[0]}</li>
        <li>{lenguajes[1]}</li>
        <li>{lenguajes[2]}</li>
      </ul>

      <ul>
        {lenguajes.map(function(lenguaje) {
          return <li>{lenguaje}</li>
        })}
      </ul>

      <ul>
        {lenguajes.map(function(lenguaje, index) {
          return <li key={index}>{lenguaje}</li>
        })}
      </ul>
    </div>
  )
}

export default App
