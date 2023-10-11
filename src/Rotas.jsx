import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyle.js'
import { temaGeral } from './styles/temaGeral.js'
import { ThemeProvider } from 'styled-components'

import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
// import Transacoes from './pages/Transacoes/Transacoes'

const Rotas = () => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={temaGeral}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </ThemeProvider>
    </BrowserRouter>

  )
}

export default Rotas

// <Route path='/transacoes/:id' element={<Transacoes />} />
