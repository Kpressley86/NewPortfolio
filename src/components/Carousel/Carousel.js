import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Resume from '../Resume/Resume';


const Carouse = () => {
    return (
        <div className="carouselBox">

            <div>
                {/* <div id="Resume" className="resume"><Resume /></div>*/}
            </div>

            <Carousel>

                <Carousel.Item>

                    <Home />

                    {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="About"
                    /> */}
                    {/* <Carousel.Caption>
                    </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>

                    <About />

                    {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Portfolio"
                    /> */}

                    {/* <Carousel.Caption>
                    </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>

                    <Contact />

                    {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Contact"
                    /> */}

                    {/* <Carousel.Caption>
                    </Carousel.Caption> */}

                </Carousel.Item>

            </Carousel>

        </div>
    );
}

export default Carouse;
