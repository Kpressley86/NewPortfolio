import React from 'react';
import './Header.css';
// import GitHub from '../images/git1.gif';
import Link from '../images/linkedin.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import LogoFade from '../images/LogoFade.png';
//import LogoClear from '../images/LogoClear.png';

const Header = () => {
    return (
        <div className="header">

            <Navbar bg="white" variant="light">

                <Navbar.Brand href="#home">
                    <img src={LogoFade} className="LogoClear" alt="LogoClear" />
                </Navbar.Brand>

                <Nav className="mr-auto">

                    <div className="linkBorder">
                        <a href="#about" target="_self" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> About</span>
                        </a>
                    </div>

                    {/* <div className="linkBorder">
                        <a href="#portfolio" target="_self" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> Portfolio</span>
                        </a>
                    </div> */}

                    <div className="linkBorder">
                        <a href="#contact" target="_self" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> Contact</span>
                        </a>
                    </div>

                    <div className="linkBorder">
                        <a href="#resume" target="_self" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> Resume ⇩</span>
                        </a>
                    </div>

                    <div className="linkBorder">
                        <a href="#login" target="_self" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> ♛</span>
                        </a>
                    </div>

                </Nav>

                <Form inline>
                    <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                        src={Link} className="social" alt="LinkedIn" /></a>
                </Form>

            </Navbar>


        </div>
    );
}

export default Header;