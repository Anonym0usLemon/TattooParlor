import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.scss';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import TattooArtists from './pages/TattooArtists';

import Footer from './pages/Footer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<NoPage />}/>
        <Route path="tattooartists" element={<TattooArtists />}/>
      </Route> 
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}