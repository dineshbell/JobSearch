import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height:'50px'}}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mb-5 mx-4" >Job Search</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mb-5 mx-4">Landing Page</NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header