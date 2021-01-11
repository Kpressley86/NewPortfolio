import React from 'react';
import NavTabs from '../NavTabs';
import './Header.css';

import Link from '../images/linkedin.png';
import Navbar from 'react-bootstrap/Navbar';
import LogoFade from '../images/LogoFade.png';
import Resume from '../Files/Resume.docx';


const Header = () => {
    return (

        <Navbar bg="white" variant="light" className="header">

            <Navbar.Brand>
                <img src={LogoFade} className="LogoClear" alt="LogoClear" />
            </Navbar.Brand>

            <div className="Spacer" />

            <div>
                <NavTabs />
            </div>

            <div className="linkBorder">
                <a href={Resume} download="Resume.docx" className="nav-link ui-box forwardBorderTrain">
                    <span className="name ui-border-element"> RESUME ⇩</span>
                </a>
            </div>

            <div className="Spacer2" />

            <div className="LinkedIn">
                <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                    src={Link} className="social" alt="LinkedIn" /></a>
            </div>

        </Navbar>

    );
}

export default Header;