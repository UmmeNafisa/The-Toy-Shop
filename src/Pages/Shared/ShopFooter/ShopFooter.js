import React from 'react';
import footerImg from '../../../Images/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import cashPic from '../../../Images/payment-companies-logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import './shopFooter.css'

const ShopFooter = () => {
    return (
        <div className="pt-5 pb-2 text-white footer-back-img" >
            <Container>
                <Row xs={1} md={1} lg={3} className="g-4 pb-5">
                    <Col>

                    </Col>
                    <Col className="text-align ps-5">
                        <img src={footerImg} alt="" />
                        <div className="ps-3">
                            <p className=" header-front">Call Us</p>
                            <h5 className="stylish-front"> +880-176563626 </h5>

                            <p className="mt-3 header-front">Email for Us</p>
                            <h5 className="stylish-front"> thetoyshop@shop.com </h5>

                            <p className="mt-3 header-front">Location</p>
                            <h5 className="stylish-front"> 32A/4, Lake Road,Gulsan Tower </h5>
                        </div>
                    </Col>
                    <Col className="text-align pt-5 ps-5">
                        <h5 className=" header-front">We supports</h5>
                        <img src={cashPic} alt="" className="w-75 mt-3 mb-2" />
                        <hr className="text-white fw-bolder" />
                        <h5 className="mt-2 header-front text-align">Follow us </h5>
                        {/* <div className=" d-flex justify-content-start icons  ">
                            <p><FontAwesomeIcon icon={faFacebook} /></p>
                            <p><FontAwesomeIcon icon={faYoutube} /></p>
                            <p><FontAwesomeIcon icon={faTwitter} /></p>
                            <p><FontAwesomeIcon icon={faInstagram} /></p>
                            <p><FontAwesomeIcon icon={faVoicemail} /></p>
                        </div> */}
                        <div>
                            <h2 className="stylish-front toy-shop-color"> The Toy Shop</h2>
                        </div>
                    </Col>
                </Row>
                <hr className="text-white fw-bolder w-75 ms-auto" />
                <div className="fw-bold  ms-auto text-end">
                    <div>Privacy Policy | Terms of Use | Cookie Policy </div>
                    <div> <small className="text-muted fw-bold">Copyright © 2021 The Toy Shop. All Rights Reserved.</small></div>

                </div>
            </Container>
        </div>
    );

};

export default ShopFooter;