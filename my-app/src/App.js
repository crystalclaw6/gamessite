
import './App.css';
import React from 'react';
import HomePage from './HomePage/HomePage.js';
import ChoosePage from './Catalog/Project.js';
import SeaBattlePage from './GamesPages/SeaBattlePage.js';
import { Routes, Route, Link} from 'react-router-dom';
import Checkers from './GamesPages/checkers.js';


function App(){ return(
    <div className="App">
    <div className = "headLink">
    <Link to="/" className = "linkStyle">Valley Store</Link>
    <Link to="/about" className = "linkStyle small">КАТАЛОГ</Link>  
    </div>
    <div className = "routed">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ChoosePage />} />
      <Route path="/seabattle" element={<SeaBattlePage />} />
      <Route path="/checkers" element={<Checkers />} />
      </Routes>
    </div>
</div>
);}
export default App;
