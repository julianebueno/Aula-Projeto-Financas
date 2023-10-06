import React from 'react'
import {StylesBannerDepoimentos} from './bannerDepoimentos.styles'

const BannerDepoimentos = () => {
  return (
    <StylesBannerDepoimentos>

      <section className={'containerImage'}>
        <img src="/LP-banner3.svg" alt=""/>
      </section>

      <section className={'containerTexto'}>
        <section className={'frameTexto'}>
          <h2 className={'tituloTexto'}>Transformações Financeiras Reais</h2>
          <p>Descubra como nossos usuários alcançaram suas metas, controlaram suas finanças e conquistaram sonhos que pareciam distantes.</p>
        </section>
        <section className={'frameDepoimento'}>
          <img src="/Ellipse3.png" alt=""/>
          <div className={'frameDepoimentoTexto'}>
            <h2 className={'tituloDepoimento'}>Ana, usuária do Finanças+</h2>
            <p className={'fraseDepoimento'}>"Desde que comecei a usar o Finanças+, minha relação com o dinheiro mudou completamente. Agora, eu sei exatamente para onde meu dinheiro está indo, e consigo planejar minhas despesas de maneira muito mais eficiente.Nunca imaginei que teria tanto controle sobre minhas finanças, e isso me deu uma sensação incrível de empoderamento."</p>

          </div>
        </section>
      </section>

    </StylesBannerDepoimentos>
  )
}

export default BannerDepoimentos