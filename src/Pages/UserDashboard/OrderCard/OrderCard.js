import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';

const OrderCard = (props) => {
    const { imgUrl, productName, status, address, delivery, quantity } = props.item;
    return (
        <div>
            <Col>
                <CardGroup>
                    <Card className="border-0">
                        <Card.Img variant="top" src={imgUrl} className="img-fluid toy-img" />
                        <Card.Body>
                            <Card.Title>{productName}</Card.Title>
                            <Card.Text>
                                <h6> Quantity : {quantity} pcs</h6>
                                <h6>  {status} </h6>
                                <p> Shift to {address} at {delivery} delivery system</p>
                            </Card.Text>
                        </Card.Body>
                        <Button> Cancel </Button>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default OrderCard;