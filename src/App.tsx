import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaPost from './components/postagem/listapost/ListaPost';


function App() {
  return (
    <>
  <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/carros' element={<ListaPost />} />
    </Routes>
      <Footer />
  </Router>
  </>
    
  );
}

export default App;
