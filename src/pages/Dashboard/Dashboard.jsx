import React from 'react'
import { StyledDashboard } from './dashboard.styles'
import Header from '../../componentes/Header/Header'

const Dashboard = () => {
  return (
    <StyledDashboard>
      {/* Uso temporario do Header para facilitar a navegação */}
      <Header/> 
      <div className='container'>
        <h1>Dashboard</h1>
      </div>
    </StyledDashboard>
  )
}

export default Dashboard