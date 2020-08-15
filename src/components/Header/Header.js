import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTabs from '../NavTabs';
import './Header.css';

import Link from '../images/linkedin.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import LogoFade from '../images/LogoFade.png';
import Resume from '../Files/Resume.docx';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
// import ThreeDModels from ".components/pages/3DModels/3DModels";

const Header = () => {
    return (
        <div className="header">

            <Navbar bg="white" variant="light">

                <Navbar.Brand>
                    <img src={LogoFade} className="LogoClear" alt="LogoClear" />
                </Navbar.Brand>

                <Router>
                    <div>
                        <NavTabs />
                        <Switch>
                            {/* <Route path="/3D Models" component={ThreeDModels}></Route> */}
                            <Route path="/about" component={About}></Route>
                            <Route path="/contact" component={Contact}></Route>
                            <Route exact path="/" component={Home}></Route>
                        </Switch>
                    </div>
                </Router>

                    <div className="linkBorder">
                        <a href={Resume} download="Resume.docx" className="nav-link ui-box forwardBorderTrain">
                            <span className="name ui-border-element"> RESUME ⇩</span>
                        </a>
                    </div>

                <Form inline>
                    <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                        src={Link} className="social" alt="LinkedIn" /></a>
                </Form>

            </Navbar>


        </div>
    );
}

export default Header;