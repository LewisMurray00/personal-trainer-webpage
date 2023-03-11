import React from 'react';
import './App.scss';

import {Navbar} from './components'
import { Header } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
