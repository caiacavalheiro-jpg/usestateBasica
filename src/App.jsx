
import { useState } from 'react'
import './App.css'

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}

function Aviso() {
  const [Visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!Visivel)}>
        Alternar aviso
      </button>

      {Visivel && <p>Conteúdo visível</p>}
    </div>
  )
}

function Saudacao() {
  const [nome, setNome] = useState("");
  const [Visivel02, setVisivel02] = useState(false);

  return (
    <div>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />

      <div>
        <button onClick={()=> setVisivel02(!Visivel02)}>
          Esconder
        </button>
      </div>
      {Saudacao && (Saudacao)}

    

      <p>Olá, {nome || "visitante"}!</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Contador />
      <Aviso />
      <Saudacao />
    </>
  )
}

export default App
