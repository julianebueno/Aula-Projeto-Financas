import styled from "styled-components"

export const StylesFooter = styled.footer`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 48px 100px;
background-color: ${(props)=> props.theme.blue700};

.frame1, .frame2, .frame3{
  display: flex;
  flex-direction: column;
  height: 300px;
}

.frame1{
  gap: 24px;
}

.frame2{
  justify-content: space-between;
  height: 280px;
}

.frame3{
  align-items: center;
  flex-direction: row;
  gap: 24px;
}

.tituloRodape, .linkRodape{
  color: ${(props)=> props.theme.white50};
}

.tituloRodape{
  font-size: 60px;
}

.linkRodape{
  font-weight: 500;
}

`