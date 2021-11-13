import React, { useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css'



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
                    // console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="admin-bg">
            <h2 className="section-header fw-bold stylish-front pt-5">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit} className=" w-50 mx-auto text-center">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email"
                        onBlur={handleOnBlur} required placeholder="name@example.com" />
                </FloatingLabel>
                <Button type="submit" className="btn-all border-0 mb-5">Make Admin</Button>
            </form>
            {success ? <Alert variant='success'>Made Admin successfully!</Alert> : ""}
        </div>
    );
};

export default MakeAdmin;