import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import slider1 from '../../../Images/banners/slider1-1.png'
import slider2 from '../../../Images/banners/slider3-1.png'
import slider3 from '../../../Images/banners/slider3-2.png'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="d-lg-flex">
                        <div className="banner-caption">
                            <h3 className="text-dark banner-title">Get -30% off</h3>
                            <p className="text-muted banner-p"> Flat discount is going on our shop </p>
                            <Button className="btn-1 border-0"> Shop Now </Button>
                        </div>
                        <div></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="d-lg-flex">
                        <div className="banner-caption">
                            <h3 className="text-dark banner-title">Gift Collection</h3>
                            <p className="text-muted banner-p">Check out the best gift collection for baby</p>
                            <Button className="btn-all border-0"> Shop Now </Button>
                        </div>
                        <div></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="d-lg-flex">
                        <div className="banner-caption">
                            <h3 className="text-dark banner-title"> Exclusive Toys</h3>
                            <p className="text-muted banner-p">Latest Baby Toy Collections find you here </p>
                            <Button className="btn-3 border-0"> Shop Now </Button>
                        </div>
                        <div></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;