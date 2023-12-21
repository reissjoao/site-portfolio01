import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

import AppRoutes from './Routes';

function App() {

  return (
    <div className='App'>
      <Header />
      <AppRoutes/>
      <Footer />
    </div>
  );
}

export default App;