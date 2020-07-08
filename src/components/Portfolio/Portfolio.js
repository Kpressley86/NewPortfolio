import React from 'react';
import './Portfolio.css';
import Crystal from '../images/crystal2.gif';
import Bam from '../images/bam.gif';
import Liri from '../images/liri.gif';
import Giphy from '../images/giphy.gif';
import Golf from '../images/golf.jpg';
import Train from '../images/Train.gif';
import RPG from '../images/RPG.gif';
import News from '../images/news.jpg';
import Trivia from '../images/Trivia.gif';
import Word from '../images/Word.gif';
import GiJoe from '../images/gijoe.png';



const Portfolio = () => {



    return (
        <div><h1 className="port">PORTFOLIO</h1>
            <div className="Portfolio">

                {/* <!-- ROW 1 --> */}
                <div className="row">

                    <div className="item1">
                        <a href="https://kpressley86.github.io/crystalCollector">
                            <img src={Crystal} className="portimg" alt="Crystal" />
                        </a>
                        <div>
                            <h2 className="neon1">Crystal Collector</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <a href="https://kpressley86.github.io/Word-Guess-Game/">
                            <img src={Word} className="portimg" alt="Word Guess" />
                        </a>
                        <div>
                            <h2 className="neon1">Word Guess</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 2 --> */}
                <div className="row">

                    <div className="item1">
                        <a href="https://kpressley86.github.io/train-schedule/">
                            <img src={Train} className="portimg" alt="Train" />
                        </a>
                        <div>
                            <h2 className="neon1">Train Schedule</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <a href="https://kpressley86.github.io/TriviaGame/">
                            <img src={Trivia} className="portimg" alt="TriviaGame" />
                        </a>
                        <div>
                            <h2 className="neon1">Trivia Game</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 3 --> */}
                <div className="row">

                    <div className="item1">
                        <a href="https://kpressley86.github.io/unit-4-game/">
                            <img src={RPG} className="portimg" alt="RPG Game" />
                        </a>
                        <div>
                            <h2 className="neon1">RPG Game</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <a href="https://kpressley86.github.io/GifTastic/">
                            <img src={Giphy} className="portimg" alt="Giphy" />
                        </a>
                        <div>
                            <h2 className="neon1">Giphy</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 4 --> */}
                <div className="row">

                    <div className="item1">
                        <div className="portimgborder">
                            <a href="https://kpressley86.github.io/Greyjoys-Project-1/">
                                <img src={Golf} className="portimg" alt="GolfPro" />
                            </a>
                        </div>
                        <div>
                            <h2 className="neon1">Golf Pro</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <a href="https://github.com/Kpressley86/liri-node-app">
                            <img src={Liri} className="portimg" alt="Liri" />
                        </a>
                        <div>
                            <h2 className="neon1">Liri-Bot</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 5 --> */}
                <div className="row">

                    <div className="item1">
                        <div className="portimgborder">
                            <a href="https://github.com/Kpressley86/bamazon">
                                <img src={Bam} className="portimg" alt="Bam" />
                            </a>
                        </div>
                        <div>
                            <h2 className="neon1">Bamazon</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <div className="portimgborder">
                            <a href="https://obscure-wave-51950.herokuapp.com/">
                                <img src={News} className="portimg" alt="NewsToMe" />
                            </a>
                        </div>
                        <div>
                            <h2 className="neon1">News To Me</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 6 --> */}
                <div className="row">
                    <div className="item1">
                            <a href="http://secure-temple-86303.herokuapp.com/">
                                <img src={GiJoe} className="portimg" alt="G.I. Joe" />
                            </a>
                        <div>
                            <h2 className="neon1">Click-Guess</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;