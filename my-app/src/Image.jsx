import React from 'react';
import {
    Helmet
} from 'react-helmet';
import './image.css';
class Image extends React.Component {


    render() {
        
        return ( 
            <>
            <div className="image">
            <img 
            src = {this.props.path} alt = {this.props.expl} width={150} height={150}/>
            </div>
            </>
        );
    }
}

export default Image;
