import React from 'react';
import './frame.css';
import {
    Helmet
} from 'react-helmet';
class Chekers extends React.Component {
    constructor() {
    super();
        this.state = {board : [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]};

  }
    componentWillUnmount(){

    }
    iframeclick() {
        let form = document.getElementById('theiframe');
        localStorage.setItem('state', JSON.stringify(form));
    }
  render() {
    return (
        <>
        <Helmet>
            <title>Шашки</title>
            </Helmet>
        <div className = "wrap">
        <iframe id = "theiframe" className = "frame" src="checkers/chekers.html" onload="iframeclick()">></iframe>
        </div>
        </>
    );
  }

}
export default Chekers;
