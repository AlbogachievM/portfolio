import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::selection{
    color: ${theme.colors.font};
    background-color: ${theme.colors.accent};
}
body {
    min-width: 360px;
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};
  letter-spacing: 1px;
  font-weight: 400;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar{
      width: 5px;
  }
  &::-webkit-scrollbar-thumb{
      background-color: ${theme.colors.accent};
  }
  &::-webkit-scrollbar-track{
      background-color: ${theme.colors.font}
  }

    
}
a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button{
    background-color: unset;
    border: none;
}

section{
    margin: 0 auto;
    padding: 30px 20px 100px;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    min-height: 100vh;
}


h1,
h2,
h3,
h4,
h5,
h6{
  margin: 0;
}
`