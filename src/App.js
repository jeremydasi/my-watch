import React from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import Boutique from './screen/boutique';
import Contact from './screen/contact';
import Header from './component/header/header';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className='app-root'>
      <Router>
        <Header/>
        <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Boutique' element={<Boutique/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
