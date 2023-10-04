import React from 'react'
import s from './bannerBemVindo.module.css'

const BannerBemVindo = () => {
  return (
    <div className={s.container}>

      <section className={s.containerTexto}>
        <h2 className={s.titulo}>Bem-vindo ao Finanças+</h2>
        <h3 className={s.frase1}>O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</h3>
        <p className={s.frase2}>Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>
      </section>

      <section className={s.containerImage}>
        <img className={s.image} src="/LP-banner1.svg" alt="mulher de sucesso"/>
      </section>

    </div>
  )
}

export default BannerBemVindo