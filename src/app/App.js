import './App.css';
import { Header } from '../components/header/Header';
import { Mercury } from '../pages/mercury/Mercury';
import { Venus } from '../pages/venus/Venus';
import { Earth } from '../pages/earth/Earth';
import { Mars } from '../pages/mars/Mars';
import { Jupiter } from '../pages/jupiter/Jupiter';
import { Saturn } from '../pages/saturn/Saturn';
import { Uranus } from '../pages/uranus/Uranus';
import { Neptune } from '../pages/neptune/Neptune';
import { Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById('planet-nav');
    const main = document.querySelector('main');
    if (menuOpen) {
      menu.classList.remove('fade-in');
      menu.classList.add('fade-out');
      main.classList.remove('fade-out');
      main.classList.add('fade-in');
      setTimeout(() => {
        menu.classList.remove('fade-out');
      }, 2000);
    } else {
      menu.classList.remove('fade-out');
      menu.classList.add('fade-in');
      main.classList.add('fade-out');
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
