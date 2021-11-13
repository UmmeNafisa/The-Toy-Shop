import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)
    // user?.photoURL
    const onSubmit = data => {
        data.photoURL = user?.photoURL;
        fetch("https://fierce-hollows-12616.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    setSuccess(true)
                    reset();
                }
            });
    };
    return (
        <div>
            <h2 className="decor-header fw-bold stylish-front pt-5" > Leave A Review </h2>
            <div className=" d-flex justify-content-center align-items-center">
                <div className="mx-auto text-center ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("displayName")} placeholder="Your Name" required /> <br />
                        <input
                            {...register("comment")}
                            placeholder="Your Opinion"
                            type="text"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <label htmlFor="Rating" className="border-end"> Rating:   </label>
                        <select {...register("rating")}>
                            <option value="1">1: Very bad</option>
                            <option value="2">2: Bad</option>
                            <option value="3">3: Good</option>
                            <option value="4">4: Satisfy</option>
                            <option value="5">5: Excellent</option>
                        </select>
                        <br />
                        <input type="submit" value="Submit" className="btn btn-all w-50 mb-3" />
                    </form>
                    {success && <Alert variant='success'>
                        Your review submitted successfully. Thanks for your review.
                    </Alert>}
                </div>
            </div>
        </div>
    );
};

export default Review;