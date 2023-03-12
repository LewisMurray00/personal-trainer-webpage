import React from 'react';
import './App.scss';

import {Navbar} from './components'
import { Header, Work, Classes } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Classes />
      <Work />
    </div>
  );
}

export default App;
