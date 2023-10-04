import React from "react"
import s from './header.module.css'

const Header = () => {
  return (
    <header className={s.containerHeader}>
      <h2 className={s.titulo}>Finanças +</h2>
      <nav className={s.navegacao}>
        <a className={s.link} href="">Home</a>
        <a className={s.link} href="">Quem Somos</a>
        <a className={s.link} href="">Entrar</a>
        <button className={s.botao}>Criar Conta</button>
      </nav>
    </header>
  )
}

export default Header
