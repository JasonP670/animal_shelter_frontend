import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Layout() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Animal Shelter</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='blogs'>Blogs</Nav.Link>
              <Nav.Link href='contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
