import React from 'react'
import {StylesHeader} from './header.styles'

const Header = () => {
  return (
    <StylesHeader>

      <h2 className={'titulo'}>Finanças +</h2>
      <nav className={'navegacao'}>
        <a href="">Home</a>
        <a href="">Quem Somos</a>
        <a href="">Entrar</a>
        <button>Criar Conta</button>
      </nav>
      
    </StylesHeader>
  )
}

export default Header
