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
import Orders from '../Orders/Orders'
import Pay from '../Pay/Pay';
import Review from '../Review/Review';



const UserDashboard = () => {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
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
                        <NavLink as={Link} to={`${url}/orders`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Orders</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink as={Link} to={`${url}/pay`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Payment</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink as={Link} to={`${url}/review`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Review</CDBSidebarMenuItem>

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
            </Switch>
        </div >
    );
};

export default UserDashboard;