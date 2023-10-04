import React from 'react'
import s from './bannerDesafioFinanceiro.module.css'

const BannerDesafioFinanceiro = () => {
  return (
    <div className={s.container}>

      <section className={s.containerImage}>
        <img className={s.image} src="/LP-banner2.svg" alt="mulher de sucesso"/>
      </section>

      <section className={s.containerTexto}>
        <h2 className={s.titulo}>O desafio Financeiro</h2>
        <h3 className={s.frase1}>Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.</h3>
        <p className={s.frase2}>  A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.</p>
        <p className={s.frase2}>É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.</p>
      </section>

    </div>
  )
}

export default BannerDesafioFinanceiro