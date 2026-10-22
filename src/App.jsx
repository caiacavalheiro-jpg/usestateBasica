
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
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>

      {visivel && <p>Conteúdo visível</p>}
    </div>
  )
}

function Saudacao({ nome }) {
  return <p>Seja bem-vindo {nome}!</p>;
}

function Nome() {
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState("");
  const [visivel02, setVisivel02] = useState(false);

  function aoPressionar(evento) {
    if (evento.key === "Enter") {
      setConfirmado(nome);
    }
  }

  return (
    <>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        onKeyDown={aoPressionar}
        placeholder="Digite seu nome"
      />

      {confirmado && <Saudacao nome={confirmado} />}

      <div>
        <button onClick={() => setVisivel02(!visivel02)}>
          Alternar aviso
        </button>

        {visivel02 && <p>Seja Bem-vindo {nome}</p>}
      </div>
    </>
  )
}

export default function App() {
  return (
    <>
      <Contador />
      <Aviso />
      <Nome />
    </>
  )
}
