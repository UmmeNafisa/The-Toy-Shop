import React from 'react';
import { useForm } from 'react-hook-form';
const AddAProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('https://fierce-hollows-12616.herokuapp.com/addProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("New product is Added")
                    reset();
                }
            })
        console.log(data);
    }

    return (
        <div>
            <h1 className="section-header fw-bold stylish-front">Add a Product</h1>
            <div className="w-75 mx-auto bg-secondary">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("toyName")}
                                placeholder="Toy Name"
                                className="p-2 m-2 mt-5 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price")}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("imgUrl", { required: true })}
                                type="url"
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn text-white btn-all w-50 mb-5" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddAProduct;