
import './App.css';
import React from 'react';
import HomePage from './HomePage.js';
import ChoosePage from './Project.js';
import TodoApp from './SeaBattlePage.js';
import { Routes, Route, Link} from 'react-router-dom';
import Shashki from './shashki';


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
      <Route path="/seabattle" element={<TodoApp />} />
      <Route path="/chekers" element={<Shashki />} />
      </Routes>
    </div>
</div>
);}
export default App;
