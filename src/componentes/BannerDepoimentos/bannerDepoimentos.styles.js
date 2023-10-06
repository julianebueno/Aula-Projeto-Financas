import styled from "styled-components"

export const StylesBannerDepoimentos = styled.section`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 24px 100px;
gap: 24px;

.containerImage, .containerTexto, .frameTexto, .frameDepoimento, .frameDepoimentoTexto{
  display: flex;
}

.containerTexto, .frameTexto, .frameDepoimentoTexto{
  flex-direction: column;

}

.containerImage{
  width: 500px;
  height: 500px;
  justify-content: end;
}

.containerTexto{
  width: 60%;
  padding: 24px 0;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.frameTexto{
  padding: 0 54px;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.tituloTexto{
  text-align: center;
}

.frameDepoimento{
  padding: 24px;
  margin: 0 30px;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  background: ${(props)=> props.theme.white200};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.30);
}

.frameDepoimentoTexto{
  padding: 10px 12px;
  gap: 24px;
}

.tituloDepoimento{
  font-size: 18px;
}

.fraseDepoimento{
  font-size: 16px;
}


`