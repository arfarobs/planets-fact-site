import './App.css';
import { Header } from '../header/Header';
import { Mercury } from '../planets/mercury/Mercury';
import { Venus } from '../planets/venus/Venus';
import { Earth } from '../planets/earth/Earth';
import { Mars } from '../planets/mars/Mars';
import { Jupiter } from '../planets/jupiter/Jupiter';
import { Saturn } from '../planets/saturn/Saturn';
import { Uranus } from '../planets/uranus/Uranus';
import { Neptune } from '../planets/neptune/Neptune';
import { Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById('planet-nav');
    if (menuOpen) {
      menu.classList.remove('fade-in');
      menu.classList.add('fade-out');
      setTimeout(() => {
        menu.classList.remove('fade-out');
      }, 2000);
    } else {
      menu.classList.remove('fade-out');
      menu.classList.add('fade-in');
    }
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <Header onClick={toggleMenu} />
      <main>
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
