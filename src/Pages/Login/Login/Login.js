import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div>
                <form onSubmit={handleLoginSubmit}>
                    <input {...register("email", { required: true })}
                        className="m-2 w-50"
                        placeholder=" Email"
                        required
                        name="email"
                        onChange={handleOnChange} />
                    {errors.email?.type === 'required' && "Your email is required"}
                    <br />
                    <input {...register("password", { required: true })}
                        className="m-2 w-50"
                        placeholder="Password"
                        required
                        type="password"
                        name="password"
                        onChange={handleOnChange} />
                    {errors.password && "Password is required"}
                    <br />

                    <Button type="submit" >Login</Button>

                    {isLoading && <Spinner animation="grow" variant="primary" />}
                    {user?.email && <Alert variant='success'>Login successfully!</Alert>}
                    {authError && <Alert variant='danger'>{authError}</Alert>}
                </form>
                <p> New User ? Create a new Account <Link to="/register">Register</Link> </p>
                <p>------------------------</p>
                <Button onClick={handleGoogleSignIn} >Google Sign In</Button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Login;