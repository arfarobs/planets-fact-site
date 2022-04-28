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

function App() {
  return (
    <>
      <Header />
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
