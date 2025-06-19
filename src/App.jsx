import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/Create';
import List from './pages/List';
import Header from './components/Header';

export default function App({ toggleDarkMode, darkMode }) {
  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cadastrar" element={<Create />} />
        <Route path="/leituras" element={<List />} />
      </Routes>
    </>
  );
}
