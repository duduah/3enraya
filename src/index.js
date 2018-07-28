import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Game />
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
