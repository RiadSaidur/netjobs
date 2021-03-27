import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './css/app.css'

import Header from './components/header/Header';
import RouterSwitch from './components/router/RouterSwitch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
