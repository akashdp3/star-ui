import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './js/App';
import { withAppProvider } from './js/context/app.context';
import reportWebVitals from './reportWebVitals';

const AppWithAppProvider = withAppProvider(App);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AppWithAppProvider />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
