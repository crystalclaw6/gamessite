import React from 'react';
import './frame.css'
//import './2.js';
import Helmet from "react-helmet";
class TodoApp extends React.Component {

createMarkup() {
  return {__html: '<div>hello</div>'};
}
  render() {

    return (
        <div className = "wrap">
        <iframe id="myHtml" className = "frame" src="1.html"></iframe>
        </div>
    );
  }
}
export default TodoApp;
