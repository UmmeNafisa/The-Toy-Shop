import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    // const [success, setSuccess] = useState(false);

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    console.log(status);
    useEffect(() => {
        fetch("https://fierce-hollows-12616.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://fierce-hollows-12616.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.matchedCount > 1) {
                    alert('Status updated successfully')
                    setStatus(result)
                }

            });
    };

    //delete items 
    const handleDeleteItems = id => {
        const proceed = window.confirm("Are sure  to delete it ?")
        if (proceed) {
            fetch(`https://fierce-hollows-12616.herokuapp.com/allOrders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remainingItems = orders.filter(item => item._id !== id)
                        setOrders(remainingItems)
                    }
                });
        }
    }
    return (
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>buyer email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status selection</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((item, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item?.productName}</td>
                            <td>{item?.email}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.price}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(item?._id)}
                                        {...register("status")}
                                    >

                                        <option value="approve">Approved</option>
                                        <option value="onTheProcess">On the process</option>
                                        <option value="onTheWay">On the way</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td>
                            <td>{item?.status}</td>
                            <td> <button onClick={() => { handleDeleteItems(item._id) }} className="btn bg-danger p-2">Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;