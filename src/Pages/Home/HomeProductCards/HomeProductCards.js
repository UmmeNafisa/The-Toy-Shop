import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProductCard.css'

const HomeProductCards = (props) => {
    const { imgUrl, toyName, price, _id, description } = props.toy;
    return (
        <div>
            <Col>
                <CardGroup>
                    <Card className="border-0">
                        <Card.Img variant="top" src={imgUrl} className="img-fluid toy-img" />
                        <Card.Body>
                            <Card.Title className="stylish-front fw-bolder text-success"><h3>{toyName}</h3></Card.Title>
                            <p className="text-muted"> {description.slice(0, 70)}...</p>
                            <Card.Text>
                                <h4 className="stylish-front text-info fw-bold"> ${price}</h4>
                            </Card.Text>
                            <Link to={`/purchase/${_id}`}> <Button className="btn-all border-0 fw-bold rounded-pill px-5"> Buy Now </Button> </Link>

                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default HomeProductCards;