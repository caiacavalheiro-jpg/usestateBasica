import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Contador() {
  const [contador, setContador] = useState(0);
  
  function aumentar() {
    numero = numero + 1;
  }
  return
          (
             <div>
               <p>{numero}</p>
               <button onClick={aumentar}>Aumentar</button>
             </div>
           );
         }



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
