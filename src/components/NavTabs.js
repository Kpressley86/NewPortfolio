import React from "react";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../components/Header/Header.css';

const NavTabs = (props) => {
    return (
        <Nav className="mr-auto">

            <div className="linkBorder nav-item">
                <NavLink  exact to="/" target="_self" className="nav-link ui-box forwardBorderTrain">
                    <span className="name ui-border-element"> HOME </span>
                </NavLink>
            </div>
           
            <div className="linkBorder nav-item">
                <NavLink  exact to="/about" target="_self" className="nav-link ui-box forwardBorderTrain">
                    <span className="name ui-border-element"> ABOUT </span>
                </NavLink>
            </div>
            
            <div className="linkBorder nav-item">
                <NavLink  exact to="/ThreeDModels" target="_self" className="nav-link ui-box forwardBorderTrain">
                    <span className="name ui-border-element"> 3D MODELS </span>
                </NavLink>
            </div>

            <div className="linkBorder nav-item">
                <NavLink  exact to="/contact" target="_self" className="nav-link ui-box forwardBorderTrain">
                    <span className="name ui-border-element"> CONTACT </span>
                </NavLink>
            </div>

            </Nav>
    );
}

export default NavTabs;