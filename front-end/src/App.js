import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { chakraCustomTheme } from './theme';
import { Layout } from './layout';
import {
  HomePage,
  LoginPage,
} from './pages';

function App() {
  return (
    <ThemeProvider theme={ chakraCustomTheme }>
      <CSSReset />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/auth/login" exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
