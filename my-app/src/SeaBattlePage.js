import React from 'react';
import './frame.css'
//import './2.js';
class TodoApp extends React.Component {
  render() {

    return (
        <div className = "wrap">
        <iframe id="myHtml" className = "frame" src="1.html"></iframe>
        </div>
    );
  }
}
export default TodoApp;
