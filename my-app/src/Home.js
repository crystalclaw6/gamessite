import React from 'react';
import {
    Helmet
} from 'react-helmet';
import './Container.css';
class HomePage extends React.Component {


    render() {
        return ( 
            <>
            <Helmet>
            <title > Добро пожаловать в Valley! < /title> 
                </Helmet>
            <div className = "listBox">
            <div className="scrollableContainer">
      <ul className="list">
        <li className="item">1</li>
        <li className="item">2</li>
      </ul>
            </div>
    </div>
            </>
        );
    }
}

export default HomePage;
