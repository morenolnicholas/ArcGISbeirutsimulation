import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setDefaultOptions } from 'esri-loader';
import registerServiceWorker from './registerServiceWorker';
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

setDefaultOptions({ css: true });

ReactDOM.render(
    <CalciteThemeProvider>
    <App />
  </CalciteThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
