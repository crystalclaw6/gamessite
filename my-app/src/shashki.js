import React from 'react';
import './frame.css'
//import './2.js';
class Chekers extends React.Component {
  render() {

    return (
        <div className = "wrap">
        <iframe id="myHtml" className = "frame" src="chekers.html"></iframe>
        </div>
    );
  }
  
}
export default Chekers;
