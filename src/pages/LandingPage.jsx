import React from 'react'
import s from './landingPage.module.css'

// Componentes
import Header from '../componentes/Header/Header.jsx'
import BannerBemVindo from '../componentes/BannerBemVindo/BannerBemVindo.jsx'
import BannerDesafioFinanceiro from '../componentes/BannerDesafioFinanceiro/BannerDesafioFinanceiro.jsx'

const LandingPage = () => {
  return (
    <div className={s.containerLandingPage}>
      <Header/>
      <BannerBemVindo/>
      <BannerDesafioFinanceiro/>

    </div>
  )
}

export default LandingPage