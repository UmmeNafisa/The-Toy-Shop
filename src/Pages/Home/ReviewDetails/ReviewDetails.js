import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../Home/ReviewCard/ReviewCard';


const ReviewDetails = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://fierce-hollows-12616.herokuapp.com/allReview")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="review-bg pb-5" id="testimonials">
            <Container>
                <h1 className="section-header fw-bold stylish-front text-white pt-3"> Testimonials </h1>
                <hr className="w-25 mx-auto pb-0 mb-0 " />
                <p className="text-white"> What people think  </p>

                <Row xs={2} md={4} lg={5} className="g-4">
                    {
                        reviews.slice(0, 6).map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default ReviewDetails;