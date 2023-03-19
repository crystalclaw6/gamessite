import React from 'react';
import Image from './Image.jsx';
import { Link } from 'react-router-dom';
import './gamechoose.css';
import JsonGames from './games.json';
class ChoosePage extends React.Component {
   // const data = JSON.parse(JsonGames);

    render() {

        return (

            <div className='project'>
            <div className='gameBox'>
            <ul className = "listOfGames">
            
            {JsonGames.map(game =>           
            <Link to= {game.path} className = "gamelinkStyle">
            <li className = "listItem">
            
            <Image path = {game.pathToLogo} expl = {game.explanation}/>
            <div className = "title">{game.name}</div>
            <div className = "description">{game.description}</div>
            </li>
            </Link>
            )}


            

            </ul>
            </div>
            </div>

        );
    }
}

export default ChoosePage;
