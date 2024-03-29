import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'


const Header = () =>{
    const image = ['https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/lifelong_learning_mult_1_res/lifelong_746x419.jpg']
    return(
       <div>
            <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><i class="fas fa-graduation-cap"></i> Online Teaching</Navbar.Brand>
    <Nav className="me-auto">
    <Navbar.Brand><NavLink
  to="/Home"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Home
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Courses"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Courses
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Aboutus"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  AboutUs
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Contact"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Contact
</NavLink></Navbar.Brand>
      
    </Nav>
    </Container>
  </Navbar>
        </div>
        <div className='d-flex align-items-center header'>
            <div className='m-5'>
            <h1>
                    <strong>Knowledge is power</strong>
                </h1>
                <h1>
                    <strong> Enjoy Learning </strong>
                </h1>
                <h1>
                    <strong>With Us!</strong>
                </h1>
            </div>
            <div>
        <Image src={image} fluid />
        </div>
        </div>
       </div>
    );
};

export default Header;