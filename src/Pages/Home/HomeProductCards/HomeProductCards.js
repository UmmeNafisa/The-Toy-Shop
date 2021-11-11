import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './HomeProductCard.css'

const HomeProductCards = (props) => {
    const { imgUrl, toyName, price } = props.toy;
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
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default HomeProductCards;