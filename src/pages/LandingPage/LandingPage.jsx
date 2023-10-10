import React from 'react'
import {StylesLandingPage} from './landingPage.styles'

// Componentes
import Header from '../../componentes/Header/Header.jsx'
import BannerBemVindo from '../../componentes/BannerBemVindo/BannerBemVindo.jsx'
import BannerDesafioFinanceiro from '../../componentes/BannerDesafioFinanceiro/BannerDesafioFinanceiro.jsx'
import BannerComeceAgora from '../../componentes/BannerComeceAgora/BannerComeceAgora.jsx'
import BannerDepoimentos from '../../componentes/BannerDepoimentos/BannerDepoimentos.jsx'
import BannerVantagens from '../../componentes/BannerVantagens/BannerVantagens.jsx'
import Footer from '../../componentes/Footer/Footer.jsx'

const LandingPage = () => {
  return (

    <StylesLandingPage>
      <Header/>
      <BannerBemVindo/>
      <BannerDesafioFinanceiro/>
      <BannerComeceAgora/>
      <BannerDepoimentos/>
      <BannerVantagens/>
      <Footer/>
    </StylesLandingPage>

  )
}

export default LandingPage