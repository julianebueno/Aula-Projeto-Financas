import React from 'react'
import {StylesBannerComeceAgora} from './bannerComeceAgora.styles'

const BannerComeceAgora = () => {
  return (
    <StylesBannerComeceAgora>

      <section className={'containerTexto'}>
        <h2>Transforme sua relação com o dinheiro</h2>
        <h3>Cadastre-se no Finanças+ agora mesmo e comece sua jornada rumo a uma vida financeira mais próspera e realizada</h3>
      </section>

      <section className={'containerInput'}>
        <input className={'inputMelhorEmailCadastro'} placeholder='Seu melhor email'></input>
        <button>Comece Agora</button>
      </section>

    </StylesBannerComeceAgora>
  )
}

export default BannerComeceAgora