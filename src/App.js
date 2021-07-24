import React from 'react';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body{
  height: 100%;
  width: 100%;
  /*Retirar as barras de rolagem de baixo e do lado direto ihul*/
  margin: 0 auto;

}
main {
  margin: 0 auto;
  position: relative;
  width: 980px;
}
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes/>
    </>
  );
}

export default App;
