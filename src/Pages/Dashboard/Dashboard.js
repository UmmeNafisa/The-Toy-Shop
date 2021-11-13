import React, { useState } from 'react';
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import Pay from '../UserDashboard/Pay/Pay';
import Orders from '../UserDashboard/Orders/Orders';
import Review from '../UserDashboard/Review/Review';
import ManageAllOrders from '../AdminDashboard/ManageAllOrders/ManageAllOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddAProduct from '../AdminDashboard/AddAProduct/AddAProduct';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageProducts from '../AdminDashboard/ManageProducts/ManageProducts';

const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Dashboard
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> {(user?.email || user?.name) && <div className="mx-auto text-center">
                        <img className="rounded-pill" src={user?.photoURL} alt="" /> <br />
                        {user?.displayName}
                    </div>
                    }
                        {user?.email || user?.name ?
                            <Button onClick={logout} varient="light" className="btn btn-all text-white fw-bold"> LOGOUT</Button> : <Nav.Link as={Link} to="/login"><Button varient="light" className="btn btn-all text-white fw-bold"> Login</Button> </Nav.Link>
                        }</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLink as={Link} to={`${url}/orders`} activeClassName="activeClicked">
                        Orders
                    </NavLink>

                    <NavLink as={Link} to={`${url}/pay`} activeClassName="activeClicked">
                        Payment
                    </NavLink>
                    <NavLink as={Link} to={`${url}/review`} activeClassName="activeClicked">
                        Review

                    </NavLink>
                    <NavLink to="/" activeClassName="activeClicked" >
                        Back to Home
                    </NavLink>
                    <hr />
                    {/* admin part */}
                    {
                        admin ? <NavLink as={Link} to={`${url}/allOrders`} activeClassName="activeClicked">
                            All Orders
                        </NavLink> : <></>
                    }

                    {
                        admin ? <NavLink to={`${url}/makeAdmin`} activeClassName="activeClicked">
                            Make an Admin
                        </NavLink> : <></>
                    }

                    {
                        admin ? <NavLink as={Link} to={`${url}/addProduct`} activeClassName="activeClicked">
                            Add Products
                        </NavLink> : <></>
                    }
                    {
                        admin ? <NavLink as={Link} to={`${url}/manageProducts`} activeClassName="activeClicked">
                            Manage Products
                        </NavLink> : <></>
                    }

                </Offcanvas.Body>
            </Offcanvas>
            <Switch>
                <Route path={`${path}/pay`}>
                    <Pay />
                </Route>
                <Route exact path={`${path}/orders`}>
                    <Orders />
                </Route>
                <Route path={`${path}/review`}>
                    <Review />
                </Route>
                {/* admin part */}
                <AdminRoute path={`${path}/allOrders`}>
                    <ManageAllOrders />
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddAProduct />
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts />
                </AdminRoute>
            </Switch>
        </>
    );
};

export default Dashboard;