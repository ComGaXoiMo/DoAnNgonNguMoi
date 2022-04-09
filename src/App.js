import React, { Component } from 'react';

 import './assets/app.js'
 import './assets/app.css'
 import './assets/grid.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Login from './components/Login';
import AccountLogin from './AccountLogin.js';
import Main from './components/Main';
import PlayVideo from './components/PlayVideo.js';
class App extends Component {
  
  render() {
    return (
      <div>
      <Main/>
        <AccountLogin/>
      </div>
    );
  }
}

export default App;