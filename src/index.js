import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import CardList from './components/CardList';
import App from './containers/App';

import { robots } from './robots';

ReactDOM.render(
  // <CardList robots={ robots }/>,
  <App/>,
  document.getElementById('root')
);