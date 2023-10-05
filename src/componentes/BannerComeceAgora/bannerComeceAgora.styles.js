import styled from "styled-components"

export const StylesBannerComeceAgora = styled.section`

display: flex;
justify-content: space-between;
width: 100%;
padding: 24px 100px;
background-color:  ${(props)=> props.theme.blue200};

.containerTexto{
  width: 45%;
  display: flex;
  padding: 67px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}

.containerInput{
  width: 45%;
  display: flex;
  padding: 67px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.inputMelhorEmailCadastro{
  width: 80%;
}

`