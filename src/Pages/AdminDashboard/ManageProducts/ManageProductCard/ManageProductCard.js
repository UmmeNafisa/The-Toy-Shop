import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProductCard = (props) => {
    const { imgUrl, toyName, price, _id } = props.toy;

    //delete item 
    const handleDeleteItems = id => {
        const proceed = window.confirm("Are sure  to delete it ?")
        if (proceed) {
            fetch(`https://fierce-hollows-12616.herokuapp.com/allOrders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
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
                        <Card.Img variant="top" src={imgUrl} style={{ width: 200, height: 150 }} />
                        <Card.Body>
                            <Card.Title className="stylish-front fw-bolder text-success"><h5>{toyName}</h5></Card.Title>

                            <Card.Text>
                                <h4 className="stylish-front text-info fw-bold"> ${price}</h4>
                            </Card.Text>
                            <Link to={`/purchase/${_id}`}> <Button onClick={() => { handleDeleteItems(_id) }} className="btn-all border-0 fw-bold rounded-pill"> Delete </Button> </Link>

                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default ManageProductCard;