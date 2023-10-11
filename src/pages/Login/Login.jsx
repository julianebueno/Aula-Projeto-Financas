import React, { useState }  from 'react'
import { StyledLogin } from './login.styles'
import Header from '../../componentes/Header/Header'

const Login = () => {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")

  const handleClick = () => {
    console.log('Nome: ', nome)
    console.log('Senha: ', senha)
  }

  return (
    <StyledLogin>
      <Header/>
      <div className={'container'}>
        <label htmlFor="">Nome:</label>
        <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)}/>
        <label htmlFor="">Senha:</label>
        <input type="text" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
        <button onClick={handleClick}>Enviar</button>
      </div>
      <p>O importante é funcionar kk</p>
    </StyledLogin>
  )
}

export default Login