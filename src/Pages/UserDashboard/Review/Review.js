import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css'


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
        <div className="review-bg">
            <div className=" w-75 pt-5">
                <h2 className="decor-header fw-bold stylish-front text-white pt-5" > Leave A Review </h2>
                <div className=" d-flex justify-content-center align-items-center">
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("displayName")} placeholder="Your Name" required className="w-100 py-2" /> <br />
                            <input
                                {...register("comment")}
                                placeholder="Your Opinion"
                                type="text"
                                className="w-100 my-2 py-2"
                            />
                            <br />
                            <label htmlFor="Rating" className="bg-white text-dark px-5 py-2"> Rating:   </label>
                            <select {...register("rating")} className="px-3 py-2 border-0" >
                                <option value="1">1: Very bad</option>
                                <option value="2">2: Bad</option>
                                <option value="3">3: Good</option>
                                <option value="4">4: Satisfy</option>
                                <option value="5">5: Excellent</option>
                            </select>
                            <br />
                            <input type="submit" value="Submit" className="btn btn-all w-50 mb-3 mt-2 text-white" />
                        </form>
                        {success && <Alert variant='success'>
                            Your review submitted successfully. Thanks for your review.
                        </Alert>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;