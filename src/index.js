import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setDefaultOptions } from 'esri-loader';
import registerServiceWorker from './registerServiceWorker';
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';
//Polyfill for IE
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

setDefaultOptions({ css: true });

ReactDOM.render(
    <CalciteThemeProvider>
    <App />
  </CalciteThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
