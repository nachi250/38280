import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';




const NavBar = ()=> {

    const categories = [
        {
            name:'home',
            src:'#'
        },
        {
            name:'link',
            src:'#'
        },
        {
            name:'Contact',
            src:'#'
        }
    ]

    return(
            <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/375px-React.svg.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        {categories.map((cat)=> {
                                            return (<Nav.Link href="#home" key={cat.name} >{cat.name}</Nav.Link>)
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