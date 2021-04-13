import { AppContextProvider } from './context/Context';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Gallery from './components/Gallery';

import Wrapper from './components/Wrapper';

const GlobalStyled = createGlobalStyle`
  :root{
    --green: #3DB46D;
    --white: #fff;
    --red:#eb5757;
    --gray:#BDBDBD;
  }

  html{
    font-size:16px;
    box-sizing:border-box;
  }

  *,
  *::before,
  *::after{
    box-sizing:inherit;
  }

  body{
    margin:0;
    font-family: 'Noto Sans JP', sans-serif;
    min-height:100vh;
    width:auto;
  }
  ::placeholder{
    color:#BDBDBD;
  }


`;

function App() {
  return (
    <AppContextProvider>
      <GlobalStyled />
      <Wrapper>
        <Header />
        <Gallery />
      </Wrapper>
    </AppContextProvider>
  );
}

export default App;
