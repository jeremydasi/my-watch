import React from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import Boutique from './screen/boutique';
import Contact from './screen/contact';
import Header from './component/header/header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Boutique' element={<Boutique/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
