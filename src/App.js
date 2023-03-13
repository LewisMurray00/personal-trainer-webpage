import React from 'react';
import './App.scss';

import {Navbar} from './components'
import { Header, Work, Classes, Testimonial } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Classes />
      <Work />
      <Testimonial />
    </div>
  );
}

export default App;
