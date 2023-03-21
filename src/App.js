import React from 'react';
import './App.scss';

import {Navbar} from './components'
import { Header, Work, Classes, Showcase,  Testimonial, Footer } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Classes />
      <Showcase />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
