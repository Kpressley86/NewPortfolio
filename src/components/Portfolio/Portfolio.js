import React from 'react';
import './Portfolio.css';
import Bam from '../images/bam.gif';
import Giphy from '../images/giphy.gif';
import RPG from '../images/RPG.gif';
import News from '../images/news.jpg';
import GiJoe from '../images/gijoe.png';



const Portfolio = () => {



    return (
        <div><h1 className="port">PORTFOLIO</h1>
            <div className="Portfolio">

              

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