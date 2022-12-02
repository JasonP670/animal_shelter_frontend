import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Layout() {
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit',
  };
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Nav className='me-auto'>
            <Link to={'/dogs'}>Dogs</Link>
            <Nav.Link>
              <Link style={linkStyle} to='/cats'>
                Cats
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='mt-5'>
        <Outlet />
      </Container>
    </>
  );
}
