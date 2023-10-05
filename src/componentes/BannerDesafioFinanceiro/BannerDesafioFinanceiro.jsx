import React from 'react'
import {StylesBannerDesafioFinanceiro} from './bannerDesafioFinanceiro.styles'

const BannerDesafioFinanceiro = () => {
  return (
    <StylesBannerDesafioFinanceiro>

      <section className={'containerImage'}>
        <img src="/LP-banner2.svg" alt="mulher preocupada com questões financeiras"/>
      </section>

      <section className={'containerTexto'}>
        <h2>O desafio Financeiro</h2>
        <h3>Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.</h3>
        <p>A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.</p>
        <p>É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.</p>
      </section>

    </StylesBannerDesafioFinanceiro>
  )
}

export default BannerDesafioFinanceiro