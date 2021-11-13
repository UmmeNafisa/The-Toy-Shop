import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Images/logo.png'
import './ShopNavbar.css'

const ShopNavbar = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" variant="light" bg="white">
            <Container>
                <img src={logo} style={{ width: 130, height: 80, marginTop: 0, }} alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home" className="text-color fw-bold header-front" >HOME</Nav.Link>
                        <Nav.Link as={Link} to="/allProducts" className="text-color fw-bold header-front" >EXCLUSIVE TOYS</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#decorToys" className="text-color fw-bold header-front" >DECOR TOYS</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#testimonials" className="text-color fw-bold header-front" >TESTIMONIALS</Nav.Link>
                        <Nav.Link as={Link} to="/userDashboard" className="text-color fw-bold header-front" >Dashboard</Nav.Link>

                        <Nav.Link as={Link} to="/adminDashboard" className="text-color fw-bold header-front"> ADMIN SIDE </Nav.Link>

                        {user?.email || user?.name ?
                            <h5 onClick={logout} className=" text-success fw-bold py-2 logout"> Logout</h5> : <Nav.Link as={Link} to="/login"><h5 className="text-success fw-bold"> Login</h5> </Nav.Link>
                        }
                        {(user?.email || user?.name) && <div>
                            <div className="mt-1">
                                <Link to="/profile" className="text-decoration-none fw-bold px-2 ">{user?.displayName}</Link>
                                <img className="user-img" src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ShopNavbar;