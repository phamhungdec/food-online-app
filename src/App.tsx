import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// material core
import { MuiThemeProvider } from '@material-ui/core/styles';

// context
import { useGlobalContext } from 'context/GlobalContext';

// layouts
import Dashboard from 'layouts/Dashboard';

// containers
import Spinner from 'containers/Spinner';

// themes
import themes from 'themes';
import { THEMES } from 'configs';

function App() {
  // 0: light, 1: dark
  const { i18n } = useTranslation();
  const { modeTheme, language } = useGlobalContext();
  const type = modeTheme === THEMES.LIGHT ? 0 : 1;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <MuiThemeProvider theme={themes(type)}>
      <div className="App">
        dsa 
        <Dashboard />
      </div>
      <Spinner />
    </MuiThemeProvider>
  );
}

export default App;
