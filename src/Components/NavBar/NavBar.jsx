import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";




const NavBar = ()=> {

    const categories = [
        {
            name:'home',
            to:'#'
        },
        {
            name:'Categories',
            to:'#'
        },
        {
            name:'Productos',
            to:'#'
        }
    ]

    return(
            <Navbar bg="light" expand="lg">
                            <Navbar.Brand style={{margin: '15px'}} href="#home"> 
                                <NavLink to={'/'}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/375px-React.svg.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                                </NavLink>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        {categories.map((category)=> {
                                            return ( <NavLink style={{textDecoration: 'none', color: 'black', margin: '20px'}} to={category.to} key={category.name}>{category.name}</NavLink>)
                                        })}
                                    </Nav> 
                                    <Nav className="me-auto">
                                        <CartWidget qty='0'/>
                                    </Nav>
                          
                                </Navbar.Collapse>
            </Navbar>
          );
}

export default NavBar