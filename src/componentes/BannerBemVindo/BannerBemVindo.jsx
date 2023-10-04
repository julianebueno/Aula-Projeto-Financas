import React from 'react'
import {StylesBannerBemVindo} from './bannerBemVindo.styles'

const BannerBemVindo = () => {
  return (
    <StylesBannerBemVindo>

      <section className={'containerTexto'}>
        <h2 className={'titulo'}>Bem-vindo ao Finanças+</h2>
        <h3 className={'frase1'}>O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</h3>
        <p className={'frase2'}>Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>
      </section>

      <section className={'containerImage'}>
        <img className={'image'} src="/LP-banner1.svg" alt="mulher de sucesso"/>
      </section>

    </StylesBannerBemVindo>
  )
}

export default BannerBemVindo