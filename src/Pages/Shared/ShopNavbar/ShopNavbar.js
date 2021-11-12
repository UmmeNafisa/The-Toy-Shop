import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Nav.Link as={Link} to="/home" className="text-color fw-bold header-front" >HOME</Nav.Link>
                        <Nav.Link as={Link} to="/home#about" className="text-color fw-bold header-front" >ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/allProducts" className="text-color fw-bold header-front" >PRODUCTS</Nav.Link>
                        <Nav.Link as={Link} to="/userDashboard" className="text-color fw-bold header-front" >User Dashboard</Nav.Link>

                        <Nav.Link as={Link} to="/adminDashboard" className="text-color fw-bold header-front"> ADMIN SIDE </Nav.Link>

                        {user?.email || user?.name ?
                            <Button onClick={logout} varient="light" className="btn btn-all text-white fw-bold py-0"> LOGOUT</Button> : <Nav.Link as={Link} to="/login"><Button varient="light" className="btn btn-all text-white fw-bold"> Login</Button> </Nav.Link>
                        }
                        {(user?.email || user?.name) && <div>
                            <Navbar.Text>
                                <Link to="/profile" className="text-decoration-none fw-bold px-2">{user?.displayName}</Link>
                                <img className="user-img" src={user?.photoURL} alt="" />
                            </Navbar.Text>`
                        </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ShopNavbar;