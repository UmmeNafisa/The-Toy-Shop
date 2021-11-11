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
                            <Card.Text>
                                <h4> Price : ${price}</h4>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/purchase/${_id}`}> <Button> Buy Now </Button> </Link>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default HomeProductCards;