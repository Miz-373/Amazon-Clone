import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
     const [{ basket, user }, dispatch] = useStateValue();
    
     const handleAuthentication = () => {
         if(user) {
            auth.signOut();
         }
     }

    return (
        <div>
                <div className="row">
                    <div className="col-md-12">
                        
                            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
                            <Nav.Link as={Link} eventKey="0" to="/"><img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/></Nav.Link>
                            <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <SearchIcon className="header__searchIcon" />
                                    </Form>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <hr />
                                    <Nav className="mr-auto">
                                    <Nav.Link as={Link} eventKey="1" to= {!user && '/login'}>
                                        <div onClick={handleAuthentication} className="header__option">
                                            <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                                            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} eventKey="2" to='orders'>
                                    <div className='header__option'>
                                        <span className='header__optionLineOne'>Returns</span>
                                        <span className='header__optionLineTwo'>Orders</span>
                                    </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} eventKey="3"  to='prime'>
                                        <div className='header__option'>
                                            <span className='header__optionLineOne'>Your</span>
                                            <span className='header__optionLineTwo'>Prime</span>
                                        </div>
                                        </Nav.Link>
                                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Best Seller</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Today's Deal</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">New Releases</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Amazon Basics</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} eventKey="4"  to="/checkout">
                                        <div className='header__optionBasket'>
                                            <ShoppingCartIcon />
                                            <span className="header__optionLineTwo header__basketCount">{user ? basket?.length : 0}</span>
                                        </div>
                                    </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                    </div>
                </div>
            </div>
    )
}

export default Header;
