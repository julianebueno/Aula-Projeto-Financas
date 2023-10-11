import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  font-style: normal;
  line-height: normal;
}

body{
  width: 100%;
  min-height: 100vh;
}

button, input, textarea, select{
  outline: none;
  border: none;
  border-radius: 8px;
}

button, a{
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}


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
  display: flex;
  align-items: center;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto', sans-serif;
  padding: 12px 48px;
  font-size: 24px;
  font-weight: 500;
  background: ${(props)=> props.theme.blue700};
  color: ${(props)=> props.theme.white50};
}

input{
  padding: 8px 12px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 37px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  background: ${(props)=> props.theme.white50};
}

`
