import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='/dogs'>Dogs</Nav.Link>
            <Nav.Link href='/dogs/new'>New Dog</Nav.Link>
            <Nav.Link href='/cats'>Cats</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='mt-5'>
        <Outlet />
      </Container>
    </>
  );

  // return (

  //   <>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to='/dogs'>Dogs</Link>
  //         </li>
  //         <li>
  //           <Link to='/dogs/new'>New Dog</Link>
  //         </li>
  //         <li>
  //           <Link to='/cats'>Cats</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <Outlet />
  //   </>
  // );
}
