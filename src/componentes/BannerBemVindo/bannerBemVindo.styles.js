import styled from 'styled-components'

export const StylesBannerBemVindo = styled.section `

display: flex;
justify-content: space-between;
width: 100%;
padding: 24px 100px;
background-image: url('/elipse.svg');
background-repeat: no-repeat;
background-position-y: bottom;
background-size:contain;

.containerTexto{
  width: 45%;
  display: flex;
  padding: 67px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.titulo{
  color: #1D3557;
  font-family: Montserrat;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.frase1{
  color: #263238;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.frase2{
  color: #263238;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.containerImage{
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: end;
}







`