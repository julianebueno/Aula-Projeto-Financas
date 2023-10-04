import React from "react"
import {StylesHeader} from "./header.styles"

const Header = () => {
  return (
    <StylesHeader>
      <h2 className={'titulo'}>Finanças +</h2>
      <nav className={'navegacao'}>
        <a className={'link'} href="">Home</a>
        <a className={'link'} href="">Quem Somos</a>
        <a className={'link'} href="">Entrar</a>
        <button className={'botao'}>Criar Conta</button>
      </nav>
    </StylesHeader>
  )
}

export default Header
