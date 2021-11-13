import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import ShopFooter from '../../Shared/ShopFooter/ShopFooter';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, formState: { errors }, reset } = useForm();
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <ShopNavbar></ShopNavbar>
            <div className="login-bg">
                <div className="w-75 mx-auto py-5">
                    <h1 className="section-header fw-bold stylish-frontmy-5 header-bg w-75 py-2 text-center mx-auto"> Register </h1>
                    <div>
                        <form onSubmit={handleLoginSubmit}>
                            <input {...register("name", { required: true })}
                                className="m-2 w-50"
                                placeholder="Your Name"
                                required
                                name="name"
                                onBlur={handleOnBlur} />
                            {errors.name?.type === 'required' && "Your name is required"}
                            <br />

                            <input {...register("email", { required: true })}
                                className="m-2 w-50"
                                placeholder=" Email"
                                required
                                name="email"
                                type="email"
                                onBlur={handleOnBlur} />
                            {errors.email?.type === 'required' && "Your email is required"}
                            <br />

                            <input {...register("password", { required: true })}
                                className="m-2 w-50"
                                placeholder="Password"
                                required
                                type="password"
                                name="password"
                                onBlur={handleOnBlur} />
                            {errors.password && "Password is required"}
                            <br />

                            <input {...register("rePassword", { required: true })}
                                className="m-2 w-50"
                                placeholder="Re-enter Password"
                                required
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur} />
                            {errors.rePassword && "Re-enter Password is required"}
                            <br />
                            <input {...register("phone", { required: true })} className="m-2 w-50" placeholder="Contact" required />
                            {errors.phone && "Phone Number is required"}
                            <br />

                            <Button type="submit" className="btn-all border-0 " >Register Now</Button>

                            {isLoading && <Spinner animation="grow" variant="primary" />}
                            {user?.email && <Alert variant='success'>Welcome, Your registration is successfully done!</Alert>}
                            {authError && <Alert variant='danger'>{authError}</Alert>}
                        </form>
                    </div>
                </div>
            </div>
            <ShopFooter></ShopFooter>
        </>
    );
};

export default Register;