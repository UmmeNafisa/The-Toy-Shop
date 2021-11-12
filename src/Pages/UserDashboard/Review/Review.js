import React from 'react';
import { useForm } from 'react-hook-form';


const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("displayName")} placeholder="Your Name" />
                <select {...register("rating")}>
                    <option value="1">female</option>
                    <option value="2">male</option>
                    <option value="3">other</option>
                    <option value="4">other</option>
                    <option value="5">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;