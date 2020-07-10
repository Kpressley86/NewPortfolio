import React from 'react';
import './Header.css';
import GitHub from '../images/git1.gif';
import Link from '../images/linkedin.png';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import LogoFade from '../images/LogoFade.png';
//import LogoClear from '../images/LogoClear.png';

const Header = () => {
    return (
        <div className="header">


            <Navbar bg="light" variant="light">

                <Navbar.Brand href="#home">
                    <img src={LogoFade} className="LogoClear" alt="LogoClear" />
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>

                <div>
                    <a id="GHub" href="https://github.com/Kpressley86?tab=repositories"><img
                        src={GitHub} className="social" alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                        src={Link} className="social" alt="LinkedIn" /></a>
                </div>


                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">LOGIN</Button>
                </Form>

            </Navbar>


        </div>
    );
}

export default Header;