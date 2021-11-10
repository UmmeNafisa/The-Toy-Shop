import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap'


const MakeAdmin = () => {
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
        </div>
    );
};

export default MakeAdmin;