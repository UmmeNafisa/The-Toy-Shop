import React from 'react';
import { Col } from 'react-bootstrap';
import user from '../../../../Images/user-removebg-preview.png'
import Rating from 'react-rating';
import './ReviewCadr.css'

const ReviewCard = (props) => {
    const { photoURL, displayName, rating, comment } = props.review;


    return (
        <div>
            <Col>
                {
                    (photoURL === null) ? <img src={user} className="reviewer-img" alt="" /> : <img src={photoURL} className="reviewer-img rounded-circle" alt="" />
                }

                <h5 className="stylish-front fw-bolder reviewer-name">{displayName}</h5>
                <p className="text-muted fw-bold">{comment}</p>
                <Rating className="rating"
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
            </Col>
        </div>
    );
};

export default ReviewCard;