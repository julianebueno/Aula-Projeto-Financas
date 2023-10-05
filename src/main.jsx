import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import { temaGeral } from './pages/temaGeral.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temaGeral}>
      <GlobalStyle/>
      <LandingPage/>
    </ThemeProvider>
  </React.StrictMode>,
)
