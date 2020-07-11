import React from 'react';
import './Footer.css';
import Bam from '../images/bam.gif';
import Liri from '../images/liri.gif';
import RPG from '../images/RPG.gif';
import Giphy from '../images/giphy.gif';
import News from '../images/news.jpg';
import GiJoe from '../images/gijoe.png';
import BasicFilm from 'react-film';

const Footer = () => {
  return (
    <div className="Footer">
      <BasicFilm height={150}>

        <div className="portimgborder">
          <a href="https://obscure-wave-51950.herokuapp.com/">
            <img src={News} className="portimg" alt="NewsToMe" />
          </a>
        </div>

        <div className="portimgborder">
          <div className="portimgborder2">
            <a href="https://kpressley86.github.io/GifTastic/">
              <img src={Giphy} className="portimgGif" alt="Giphy" />
            </a>
          </div>
        </div>

        <div className="portimgborder">
          <div className="portimgborder2">
            <a href="http://secure-temple-86303.herokuapp.com/">
              <img src={GiJoe} className="portimg2" alt="G.I. Joe" />
            </a>
          </div>
        </div>

        <div className="portimgborder">
          <div className="portimgborder2">
            <a href="https://github.com/Kpressley86/liri-node-app">
              <img src={Liri} className="portimgGif" alt="LiriBot" />
            </a>
          </div>
        </div>

        <div className="portimgborder">
          <div className="portimgborder2">
            <a href="https://kpressley86.github.io/unit-4-game/">
              <img src={RPG} className="portimgGif" alt="RPG" />
            </a>
          </div>
        </div>

        <div className="portimgborder">
          <a href="https://github.com/Kpressley86/bamazon">
            <img src={Bam} className="portimg" alt="Bamazon" />
          </a>
        </div>

      </BasicFilm>
    </div>
  );
}

export default Footer;