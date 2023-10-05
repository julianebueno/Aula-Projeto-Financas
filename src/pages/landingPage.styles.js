import styled from "styled-components"

export const StylesLandingPage = styled.section `

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
  overflow-x: hidden;

  h2{
    color: ${(props)=> props.theme.blue700};
    font-family: 'Montserrat', sans-serif;
    font-size: 38px;
    font-weight: 700;
  }
  
  h3{
    color: ${(props)=> props.theme.blue900};
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
  }

  p{
    color: ${(props)=> props.theme.blue900};
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 300;
  }

  a{
    color: ${(props)=> props.theme.blue500};
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
  }

  button{
    border: none;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto', sans-serif;
    padding: 12px 48px;
    font-size: 24px;
    font-weight: 500;
    background: ${(props)=> props.theme.blue700};
    color: ${(props)=> props.theme.white50};
  }

  input{
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 37px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    background: ${(props)=> props.theme.white50};
  }

`

