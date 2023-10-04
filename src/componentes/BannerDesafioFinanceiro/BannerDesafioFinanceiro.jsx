import React from 'react'
import {StylesBannerDesafioFinanceiro} from './bannerDesafioFinanceiro.styles'

const BannerDesafioFinanceiro = () => {
  return (
    <StylesBannerDesafioFinanceiro>

      <section className={'containerImage'}>
        <img className={'image'} src="/LP-banner2.svg" alt="mulher de sucesso"/>
      </section>

      <section className={'containerTexto'}>
        <h2 className={'titulo'}>O desafio Financeiro</h2>
        <h3 className={'frase1'}>Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.</h3>
        <p className={'frase2'}>  A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.</p>
        <p className={'frase2'}>É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.</p>
      </section>

    </StylesBannerDesafioFinanceiro>
  )
}

export default BannerDesafioFinanceiro