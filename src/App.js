import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  function toggleTheme() {
    console.log("toggleTheme")
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <div>
          <h2>Olá, Mundo!</h2>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
