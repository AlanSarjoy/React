import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { getAllCategories } from '../../services/products';

const NavBar = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() =>{
    getAllCategories()
    .then((res) =>{
      setCategories(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  });
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link to="/" style={{color: "black", textDecoration: "none"}}>DecoTodoVuelve</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  {categories.map((category) => {
                    return (
                      <NavDropdown.Item key={category.slug}> 
                        <Link to={`/category/${category.slug}`}>{category.name}</Link>  
                      </NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar