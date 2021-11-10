import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
        </div>
    );
};

export default Review;