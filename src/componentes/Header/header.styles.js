import styled from 'styled-components'

export const StylesHeader = styled.header `

display: flex;
width: 100%;
padding: 12px 0;
justify-content: space-between;
align-items: center;

.titulo{
  color: #457B9D;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.navegacao{
  display: flex;
  align-items: center;
  gap: 25px;
}

.link{
  color: #457B9D;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
}

.botao{
  border: none;
  display: flex;
  padding: 12px 48px;
  align-items: center;
  border-radius: 8px;
  background: #1D3557;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

`