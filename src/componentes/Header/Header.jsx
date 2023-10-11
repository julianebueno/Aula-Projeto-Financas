import React from 'react'
import {StylesHeader} from './header.styles'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const handleClick = ()=>{navigate('/cadastro')}

  return (
    <StylesHeader>

      <h2 className={'titulo'}>Finanças +</h2>
      <nav className={'navegacao'}>
        <Link to='/' className={"link"}>Home</Link>
        <Link to='/' className={"link"}>Quem Somos</Link>
        <Link to='/login' className={"link"}>Entrar</Link>
        <button onClick={handleClick}>Criar Conta</button>
      </nav>
      
    </StylesHeader>
  )

}

export default Header
