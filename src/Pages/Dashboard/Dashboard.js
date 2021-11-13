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
import ShopNavbar from '../Shared/ShopNavbar/ShopNavbar';
import ShopFooter from '../Shared/ShopFooter/ShopFooter';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const activeStyle = {
        fontWeight: "bold",
        color: "cyan"
    }
    return (
        <>
            <ShopNavbar></ShopNavbar>
            <Button className="btn-all border-0 dashboard" onClick={handleShow}>
                <p><FontAwesomeIcon icon={faBars} /></p>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="mx-auto"> {(user?.email || user?.name) && <div className="mx-auto text-center">
                        <img className="rounded-pill mt-3 mb-2" src={user?.photoURL} alt="" /> <br />
                        <h6 className="text-white mb-2"> {user?.displayName} </h6>
                    </div>
                    }
                        {user?.email || user?.name ?
                            <Button onClick={logout} varient="light" className="border-0 btn-all text-white fw-bold"> Logout</Button> : <Nav.Link as={Link} to="/login"><Button varient="light" className="btn btn-all text-white fw-bold"> Login</Button> </Nav.Link>
                        }</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLink as={Link} to={`${url}/`} activeStyle={activeStyle} className="nav-link">
                        Orders
                    </NavLink>
                    <br />

                    <NavLink as={Link} to={`${url}/pay`} activeStyle={activeStyle} className="nav-link">
                        Payment
                    </NavLink>
                    <br />
                    <NavLink as={Link} to={`${url}/review`} activeStyle={activeStyle} className="nav-link">
                        Review
                    </NavLink>
                    <br />

                    <hr className="text-white" />
                    {/* admin part */}
                    {
                        admin ? <NavLink as={Link} to={`${url}/allOrders`} activeStyle={activeStyle} className="nav-link">
                            All Orders
                        </NavLink> : <></>
                    }
                    <br />
                    {
                        admin ? <NavLink to={`${url}/makeAdmin`} activeStyle={activeStyle} className="nav-link">
                            Make an Admin
                        </NavLink> : <></>
                    }
                    <br />
                    {
                        admin ? <NavLink as={Link} to={`${url}/addProduct`} activeStyle={activeStyle} className="nav-link">
                            Add Products
                        </NavLink> : <></>
                    }
                    <br />
                    {
                        admin ? <NavLink as={Link} to={`${url}/manageProducts`} activeStyle={activeStyle} className="nav-link">
                            Manage Products
                        </NavLink> : <></>
                    }

                </Offcanvas.Body>
            </Offcanvas>
            <Switch>
                <Route path={`${path}/pay`}>
                    <Pay />
                </Route>
                <Route exact path={`${path}/`}>
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

            <ShopFooter></ShopFooter>
        </>
    );
};

export default Dashboard;