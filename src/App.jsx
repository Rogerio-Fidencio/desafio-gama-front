import { useState } from 'react'
import './App.css'

function App() {
 const [chave, setChave] = useState("")

  function pegarNumero(num){
    setChave(chave + num)
  }

  async function request (body){
    const response = await fetch("https://tijolao-gama.herokuapp.com/", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({chave:body}),
    })
    const data = await response.json()
    setChave(data)
    setTimeout(()=>{setChave("")}, 3000)
  }
 
  return (
    <div className="container">
     <div className="fone">
      <h1>TIJOLÃO</h1>
      <section className='display'>
      <div className="display">{chave}</div>
      </section>
      <button onClick={() => pegarNumero("-")}className="full">Adicionar</button>
      <section className='btn-section'>
        <button onClick={() =>  pegarNumero("1")} className="btn"><span>1</span><span>🎧</span></button>
        <button onClick={() => pegarNumero("2")} className="btn"><span>2</span><span>abc</span></button>
        <button onClick={() => pegarNumero("3")} className="btn"><span>3</span><span>def</span></button>
        <button onClick={() => pegarNumero("4")} className="btn"><span>4</span><span>ghi</span></button>
        <button onClick={() => pegarNumero("5")} className="btn"><span>5</span><span>jkl</span></button>
        <button onClick={() => pegarNumero("6")} className="btn"><span>6</span><span>mno</span></button>
        <button onClick={() => pegarNumero("7")} className="btn"><span>7</span><span>pqrs</span></button>
        <button onClick={() => pegarNumero("8")} className="btn"><span>8</span><span>tuv</span></button>
        <button onClick={() => pegarNumero("9")} className="btn"><span>9</span><span>wxyz</span></button>
        <button onClick={() => pegarNumero("*")} className="btn"><span>*</span><span>.</span></button>
        <button onClick={() => pegarNumero("0")} className="btn"><span>0</span><span>_</span></button>
        <button onClick={() => pegarNumero("#")} className="btn"><span>#</span><span>⏏</span></button>
      </section>
      <button onClick={() => request(chave)} className="full enviar">Enviar</button>
     </div>
    </div>
  )
}

export default App
