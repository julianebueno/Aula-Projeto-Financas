import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
}

body{
  width: 100%;
  min-height: 100vh;
}

button, input, textarea, select{
  outline: none;
}

button, a{
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}

`
