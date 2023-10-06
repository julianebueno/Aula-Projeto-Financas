import React from 'react'
import {StylesBannerVantagens} from './bannerVantagens.styles'

const BannerVantagens = () => {
  return (
    <StylesBannerVantagens>
      <section className={'frames'}>
        <img  className={'imagens'} src="/lp-icon1.svg" alt=""/>
        <h2 className={'textos'}>Orçamento Inteligente e Eficiente</h2>
      </section>
      <section className={'frames'}>
        <img  className={'imagens'} src="/lp-icon2.svg" alt=""/>
        <h2 className={'textos'}>Controle Financeiro Simplificado</h2>
      </section>
      <section className={'frames'}>
        <img  className={'imagens'} src="/lp-icon3.svg" alt=""/>
        <h2 className={'textos'}>Metas Realistas e Alcançáveis</h2>
      </section>
    </StylesBannerVantagens>
  )
}

export default BannerVantagens