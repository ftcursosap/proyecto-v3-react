import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(2);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  function cero() {
    setContador(contador * 0);
  }

  return(
    <div>
      <h1>Contador</h1>
      <h2>Mi contador en React</h2>
      <p>{contador}</p>

      <button onClick={aumentar}>Suma 1</button>
      <button onClick={disminuir}>Resta 1</button>
      <button onClick={cero}>Valor cero</button>

    </div>
  );
  
}

export default App
