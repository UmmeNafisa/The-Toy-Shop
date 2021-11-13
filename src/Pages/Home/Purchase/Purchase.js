import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar'
import ShopFooter from '../../Shared/ShopFooter/ShopFooter'
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';


const Purchase = () => {
    const [success, setSuccess] = useState(false)
    const [item, setItem] = useState({});
    const { toyId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //add / post orders on DB
    const onSubmit = (data) => {
        data.email = user?.email;
        data.imgUrl = item?.imgUrl;
        data.productName = item?.toyName;
        data.price = item?.price;
        data.status = "pending";
        fetch("https://fierce-hollows-12616.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    setSuccess(true)
                    reset()
                }
            });
        console.log(data);
    };

    //get single product info
    useEffect(() => {
        fetch(`https://fierce-hollows-12616.herokuapp.com/singleProduct/${toyId}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [toyId]);
    console.log(item);
    return (
        <>
            <ShopNavbar></ShopNavbar>
            <div>
                <div className="container">
                    <div className="row container">
                        <div className="col-md-6 my-3">
                            <h2 className="section-header fw-bold stylish-front "> Your Selected Toy </h2>
                            <img className="w-50" src={item.imgUrl} alt="" />
                            <h3 className="text-success fw-bold">{item?.toyName}</h3>
                            <p className="text-muted fw-bold">{item?.description}</p>
                            <h4 className='text-info fw-bold'> Price : ${item?.price}</h4>
                            <h5> Delivery System : </h5>
                            <li><span className="text-success fw-bold">Regular Delivery:</span>
                                Inside city, delivery the product within 2-3 days.Outside city, delivery the product within 4-5 days

                            </li>
                            <li><span className="text-success fw-bold">Express Delivery:</span>

                                Inside city, delivery the product within 24 hr.                                    Outside city, delivery the product within 1-2 days
                            </li>
                            <h6> We have 7 days return policy </h6>

                        </div>

                        <div className="col-md-6">
                            <h2 className="section-header fw-bold stylish-front"> Confirm Order  </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("displayName")}
                                    placeholder="Name"
                                    defaultValue={user.displayName}
                                    className="p-2 m-2 w-100 input-field"
                                    required
                                />
                                <input
                                    {...register("email")}
                                    placeholder="email"
                                    defaultValue={user?.email}
                                    className="p-2 m-2 w-100 input-field"
                                    required
                                />

                                <textarea
                                    {...register("address")}
                                    placeholder="Your Address"
                                    className="p-2 m-2 w-100 input-field"
                                    required
                                />
                                <input
                                    {...register("quantity", { required: true })}
                                    placeholder="Quantity"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                    required
                                />
                                <br />
                                <input
                                    {...register("phone", { required: true })}
                                    placeholder="Contact Number"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                    required
                                />

                                <select {...register("delivery")} className="p-2 m-2 w-100" placeholder="Delivery time ">
                                    <option value="regular">Regular Delivery</option>
                                    <option value="express">Express Delivery</option>
                                </select>
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}
                                {success ? <Alert variant='success'>
                                    Your Order has been placed successfully.Check Dashboard for updates
                                </Alert> : ""}
                                <input
                                    type="submit"
                                    value="Order now"
                                    className="btn btn-all text-white fw-bold w-50 mb-5"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ShopFooter></ShopFooter>
        </>
    );
};

export default Purchase;