import React from 'react';
import './Footer.css';
import Bam from '../images/Bam.jpg';
import Liri from '../images/liri.gif';
import Giphy from '../images/giphy.gif';
import News from '../images/news.jpg';
import GiJoe from '../images/gijoe.png';

import BasicFilm, { createBasicStyleSet } from 'react-film';

const originalStyleSet = createBasicStyleSet();
const myStyleSet = {
    ...originalStyleSet,
    scrollBarHandler: originalStyleSet.scrollBarHandler + ' my-scroll-bar-class'
};

export default props =>
        <BasicFilm styleSet={myStyleSet} className="Footer">

            <div className="portimgborder">
                <a href="https://obscure-wave-51950.herokuapp.com/">
                    <img src={News} className="portimg" alt="NewsToMe" />
                </a>
            </div>

            <div className="portimgborder">
                <div className="footerSpacer" />
            </div>

            <div className="portimgborder">
                <div className="portimgborder2">
                    <a href="https://kpressley86.github.io/GifTastic/">
                        <img src={Giphy} className="portimg" alt="Giphy" />
                    </a>
                </div>
            </div>

            <div className="portimgborder">
                <div className="footerSpacer" />
            </div>

            <div className="portimgborder">
                <div className="portimgborder2">
                    <a href="http://secure-temple-86303.herokuapp.com/">
                        <img src={GiJoe} className="portimg" alt="G.I. Joe" />
                    </a>
                </div>
            </div>

            <div className="portimgborder">
                <div className="footerSpacer" />
            </div>

            <div className="portimgborder">
                <div className="portimgborder2">
                    <a href="https://github.com/Kpressley86/liri-node-app">
                        <img src={Liri} className="portimg" alt="LiriBot" />
                    </a>
                </div>
            </div>

            <div className="portimgborder">
                <div className="footerSpacer" />
            </div>

            <div className="portimgborder">
                <a href="https://github.com/Kpressley86/bamazon">
                    <img src={Bam} className="portimg" alt="Bamazon" />
                </a>
            </div>

        </BasicFilm>