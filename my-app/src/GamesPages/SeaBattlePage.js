import React from 'react';
import './frame.css';
import {
    Helmet
} from 'react-helmet';
class SeaBattlePage extends React.Component {
  render() {

    return (
        <>
        <Helmet>
            <title>Морской бой</title>
            </Helmet>
        <div className = "wrap">
        <iframe id="myHtml" src="seabattle/SBpage.html"></iframe>
        </div>
        </>
    );
  }
}
export default SeaBattlePage;
