import React from 'react';
import ReactDOM from 'react-dom';

import {Helmet} from 'react-helmet';

import './index.css';
import App, {Title} from './App';
//import './Api'
import reportWebVitals from './reportWebVitals';

class TitleBar extends React.PureComponent {
  render() {
    return (
      <Helmet><title>{ Title }</title></Helmet>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TitleBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
