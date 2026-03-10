import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(10);

  return(
    <div>
      <h1>Contador</h1>
      <p>Contador Actual</p>
      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>
    </div>
  );
  
}

export default App
