import React from 'react';
import {
    Helmet
} from 'react-helmet';
import './Home.css';
import JsonGames from './games.json';
class HomePage extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      games: JsonGames,
        currentIndex: 0,
    };
  }
    setCurrentIndex(increment){
        this.setState((prevState, props) => ({
    currentIndex: prevState.currentIndex + increment
}));
    }
    render() {
        return (
            <div className = "HomePage">
            <Helmet>
            <title > Добро пожаловать в Valley! < /title>
            </Helmet>
            <section className = "section">
            <div>
            {JsonGames.map((game, gameIndex) =>{
            let position = 'nextSlide';
            console.log(this.state.currentIndex, gameIndex);
            if (gameIndex === this.state.currentIndex){
                position = 'activeSlide';
            }
            if (gameIndex ===  this.state.currentIndex - 1 || ( this.state.currentIndex === 0 && gameIndex === this.state.games.length)){
                position = 'lastSlide';
            }
            return(
                <article className = {position}>
                <img src = {game.pathToLogo} className = "backImg" />
                <div className = "gameTitle">{game.name}</div>
                </article>
            )
            })}
            <button className='prev' onClick={this.setCurrentIndex.bind(this,-1)}>
                </button>

                <button className='next' onClick={this.setCurrentIndex.bind(this,1)}>
                </button>
            </div>
            </section>
            </div>
        );
    }
}

export default HomePage;
