import React from 'react';
import './image.css';
class Image extends React.Component {


    render() {

        return (
            <>
            <div className="image">
            <img
            src = {this.props.path} alt = {this.props.expl}/>
            </div>
            </>
        );
    }
}

export default Image;
