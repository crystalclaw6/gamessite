import React from 'react';
import {
    Helmet
} from 'react-helmet';
import { Link } from 'react-router-dom';
import './Home.css';
import JsonGames from '../data/games.json';
class HomePage extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      games: JsonGames.slice(0,3),
        currentIndex: 0,
    };
  }
    componentDidMount(){
        clearInterval(this.upd);
        this.upd = setInterval(()=>this.autoSlide(),5000);
    }
    setCurrentIndex(increment){
        this.setState((prevState) => ({
    currentIndex: prevState.currentIndex + increment,
}));
    }
    componentDidUpdate(){
        let lastIndex = this.state.games.length - 1;
        if (this.state.currentIndex < 0) {
            this.setState((prevState) => ({
    currentIndex: lastIndex,
}));
        }
        if (this.state.currentIndex > lastIndex) {
            this.setState((prevState) => ({
    currentIndex: 0,
}));
        }
        }
    autoSlide(){
            this.setState((prevState) => ({
    currentIndex: prevState.currentIndex + 1,
}));
    }
    render() {
        return (
            <div className = "HomePage">
            <Helmet>
            <title>Добро пожаловать в игровой клиент Valley Store</title>
            </Helmet>
            <section className = "section">
            {JsonGames.map((game, gameIndex) =>{
            let position = 'nextSlide';
            if (gameIndex === this.state.currentIndex){
                position = 'activeSlide';
            }
            if (gameIndex ===  this.state.currentIndex - 1 || ( this.state.currentIndex === 0 && gameIndex === this.state.games.length)){
                position = 'lastSlide';
            }
            return(
                <Link to={game.path} className = "">
                <article className = {position}>
                <div className = "gameTitle">{game.name}</div>
                <img src = {game.pathToBanner} alt = {game.explanation} className = "backImg" />
                </article>
                </Link>
            )
            })}
            <button className='prev' onClick={this.setCurrentIndex.bind(this,-1)}>
                <img src="/homepage/leftPoint.png" className='prev' alt="left pointer" />
                </button>

                <button className='next' onClick={this.setCurrentIndex.bind(this,1)}>
                    <img src="/homepage/rightPoint.png" className='next' alt="right pointer" />
                </button>
            </section>
            </div>
        );
    }
}

export default HomePage;
