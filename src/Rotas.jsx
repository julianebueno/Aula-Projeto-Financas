import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { temaGeral } from './styles/temaGeral.js'
import { ThemeProvider } from 'styled-components'
// import Login from './pages/Login/Login.jsx'
// import Cadastro from './pages/Cadastro/Cadastro'
// import Dashboard from './pages/Dashboard/Dashboard'
// import Transacoes from './pages/Transacoes/Transacoes'

const Rotas = () => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={temaGeral}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          
        </Routes>

      </ThemeProvider>
    </BrowserRouter>

  )
}

export default Rotas

// <Route path='/login' element={<Login />} />
// <Route path='/cadastro' element={<Cadastro />} />
// <Route path='/dashboard' element={<Dashboard />} />
// <Route path='/transacoes/:id' element={<Transacoes />} />

//Criar o arquivo e o componente rotas
//importar o BR -  Pai da aplicação
//importa Routes -  define o que é dinamico e o que é estatico
//Criar as paginas que serão utilizadas
//Importar o Route -  define o path(caminho) de cada pagina
//Importar Themeprovider, tema, e o globalStyle
//Importar o componente rotas na raiz do projeto, main.jsx
