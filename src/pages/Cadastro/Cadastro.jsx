import React from 'react'
import Header from '../../componentes/Header/Header'
import { StyledCadastro } from './cadastro.styles'

const Cadastro = () => {
  return (
    <StyledCadastro>
      {/* Uso temporario do Header para facilitar a navegação */}
      <Header/>
      <div className='container'>
        <h1>Cadastro</h1>
      </div>
    </StyledCadastro>
  )
}

export default Cadastro