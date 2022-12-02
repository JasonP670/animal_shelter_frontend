import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const linkStyle = {
    color: 'inherit',
    'text-decoration': 'inherit',
  };
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link style={linkStyle} to={'/dogs'}>
                Dogs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={linkStyle} to='/dogs/new'>
                New Dog
              </Link>
            </Nav.Link>
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
