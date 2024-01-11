import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './input.css';
import SoftwaresList from './pages/softwaresList';
import Home from './pages/home';

function App() {
  return (
    <div className="App bg-gradient-purple">
      <Routes>
        <Route path="/codigo-sentido" element={<Home />} />
        <Route path="/codigo-sentido/lista_de_softwares" element={<SoftwaresList />} />
      </Routes>
    </div>
  );
}
export default App;