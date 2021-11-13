import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container, Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';

const Orders = () => {
    const { user, token } = useAuth();
    const [order, setOrder] = useState([])

    useEffect(() => {
        const url = `https://fierce-hollows-12616.herokuapp.com/myOrder?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [user.email, token]);

    return (
        <div>
            <Container>
                <h3> Your Orders items </h3>
                <Row xs={2} md={3} lg={3} className="g-4">
                    {
                        order.map(item => <OrderCard
                            key={item._id}
                            item={item}
                        ></OrderCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Orders;