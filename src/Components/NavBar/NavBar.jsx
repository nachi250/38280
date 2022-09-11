import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Services/firebase/firebase'
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = ()=> {
    const [categories, setCategories] = useState([])

    useEffect(()=> {

        getDocs(collection(db, 'categories')).then((snapshot) => {
            const items = snapshot.docs.map(doc =>{
                return {id:doc.id, ...doc.data()}
            })
            console.log('items nav ',items)
            setCategories(items)
        })
    },[])


    return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{margin: '15px'}}> 
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
                        <Nav className="mx-auto">
                        <NavLink style={{textDecoration: 'none', color: 'black', margin: '20px'}} to='/'>Home</NavLink>
                        
                        <NavDropdown title="Categories" id="navbarScrollingDropdown" className='m-auto'>
                            {categories.map((category)=>{
                                return(
                                    <NavLink style={{textDecoration: 'none', color: 'black', margin: '20px'}} to={category.name} key={category.key}>{category.name}</NavLink>
                                )
                            })}
                        </NavDropdown>
                        
                        </Nav> 
                        <Nav className="m-3">
                            <CartWidget qty='0'/>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
          );
}

export default NavBar