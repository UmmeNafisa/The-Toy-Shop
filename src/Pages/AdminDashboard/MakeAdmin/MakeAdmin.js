import React, { useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fierce-hollows-12616.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h3 className="text-center mt-5 mb-3 ms-5">Make an Admin</h3>
            <form onSubmit={handleAdminSubmit} className="d-flex w-100">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email"
                        onBlur={handleOnBlur} placeholder="name@example.com" />
                </FloatingLabel>
                <Button type="submit" variant="success">Make Admin</Button>
            </form>
            {success ? <Alert variant='success'>Made Admin successfully!</Alert> : ""}
        </div>
    );
};

export default MakeAdmin;