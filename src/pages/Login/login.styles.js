import styled from "styled-components"

export const StyledLogin = styled.section`

  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 0 90px;
  min-height: 100vh;

  .container{
    border: solid blue;
    width: 70%;
    height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    background-color: ${(props) => props.theme.blue200};
  }

`