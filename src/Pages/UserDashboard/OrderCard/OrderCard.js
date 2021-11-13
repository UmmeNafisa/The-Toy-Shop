import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';

const OrderCard = (props) => {
    const { imgUrl, productName, status, address, delivery, quantity, _id } = props.item;

    //delete item 
    const handleDeleteItems = id => {
        const proceed = window.confirm("Are sure  to cancel it ?")
        if (proceed) {
            fetch(`https://fierce-hollows-12616.herokuapp.com/allOrders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                    }
                });
        }
    }
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
                        <Button onClick={() => { handleDeleteItems(_id) }}> Cancel </Button>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default OrderCard;