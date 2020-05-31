import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { chakraCustomTheme } from './theme';
import { Layout } from './layout';

function App() {
  return (
    <ThemeProvider theme={ chakraCustomTheme }>
      <CSSReset />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
