import React from 'react'
import {StylesFooter} from './footer.styles'

const Footer = () => {
  return (
    <StylesFooter>
      <section className={'frame1'}>
        <h2 className={'tituloRodape'}>Finanças +</h2>
        <a className={'linkRodape'} href="">financasmais@email.com</a>
        <a className={'linkRodape'} href="">0800 987 6543</a>
      </section>
      <section className={'frame2'}>
        <a className={'linkRodape'} href="">Sobre Nós</a>
        <a className={'linkRodape'} href="">Perguntas Frequentes</a>
        <a className={'linkRodape'} href="">Política de Privacidade</a>
        <a className={'linkRodape'} href="">Termos de Uso</a>
        <a className={'linkRodape'} href="">Carreiras</a>
      </section>
      <section className={'frame3'}>
        <a className={'linkRodape'} href="">faceb</a>
        <a className={'linkRodape'} href="">insta</a>
        <a className={'linkRodape'} href="">linke</a>
      </section>
    </StylesFooter>
  )
}

export default Footer