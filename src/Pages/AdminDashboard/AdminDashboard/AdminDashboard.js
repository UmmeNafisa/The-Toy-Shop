import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';



const AdminDashboard = () => {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <div>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>

                        {(user?.email || user?.name) && <div className="mx-auto text-center">
                            <img className="rounded-pill" src={user?.photoURL} alt="" /> <br />
                            {user?.displayName}
                        </div>
                        }
                        {user?.email || user?.name ?
                            <Button onClick={logout} varient="light" className="btn btn-all text-white fw-bold"> LOGOUT</Button> : <Nav.Link as={Link} to="/login"><Button varient="light" className="btn btn-all text-white fw-bold"> Login</Button> </Nav.Link>
                        }

                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink as={Link} to={`${url}/allOrders`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">All Orders</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink as={Link} to={`${url}/addProduct`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Add Products</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink as={Link} to={`${url}/makeAdmin`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Make an Admin</CDBSidebarMenuItem>

                            </NavLink>
                            <NavLink as={Link} to={`${url}/manageProducts`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Manage Products</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center', textColor: 'white' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            <NavLink to="/" activeClassName="activeClicked" className="text-white">
                                <CDBSidebarMenuItem icon="chart-line">
                                    Back to Home
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
            <div>
                <Switch>
                    <Route path={`${path}/allOrders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddAProduct />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                </Switch>
            </div>
        </div >
    );
};

export default AdminDashboard;