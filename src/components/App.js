import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from './Navigation/Navigation'

require('../images/favicon.ico')
require('../styles/style.css')

import Home from './Home/Home'

ReactDOM.render (
  <MuiThemeProvider>
    <div id="root">
      <Navigation />
      <Home/>
    </div>
  </MuiThemeProvider>,
  document.body
);
