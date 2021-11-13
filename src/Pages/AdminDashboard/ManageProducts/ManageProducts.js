import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageProductCard from './ManageProductCard/ManageProductCard';

const ManageProducts = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://fierce-hollows-12616.herokuapp.com/addProduct')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className="section-header fw-bold stylish-front pt-5"> Manage All Toys </h1>

                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        toys.map(toy => <ManageProductCard
                            key={toy._id}
                            toy={toy}
                        ></ManageProductCard>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default ManageProducts;