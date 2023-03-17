
import './App.css';
import React from 'react';
import HomePage from './Home.js';
import ChoosePage from './Project.js';
import TodoApp from './SeaBattlePage.js';
import { Routes, Route, Link} from 'react-router-dom';

function App(){ return(
    <div className="App">
  
    <div className = "headLink">
    <Link to="/" className = "linkStyle">Valley</Link>        
    <Link to="/about" className = "linkStyle small">КАТАЛОГ</Link>  
    </div>
    <div className = "routed">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ChoosePage />} />
     <Route path="/seabattle" element={<TodoApp />} />
      </Routes>
    </div>
</div>
);}
export default App;
