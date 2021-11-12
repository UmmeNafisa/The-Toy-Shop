import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProductCard.css'

const HomeProductCards = (props) => {
    const { imgUrl, toyName, price, _id } = props.toy;
    return (
        <div>
            <Col>
                <CardGroup>
                    <Card className="border-0">
                        <Card.Img variant="top" src={imgUrl} className="img-fluid toy-img" />
                        <Card.Body>
                            <Card.Title>{toyName}</Card.Title>
                            <div className="d-flex">
                                <Card.Text>
                                    <h4> Price : ${price}</h4>
                                </Card.Text>

                                <Link to={`/purchase/${_id}`}> <Button className="btn-all border-0 fw-bold"> Buy Now </Button> </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default HomeProductCards;