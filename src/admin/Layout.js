import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/dogs'>Dogs</Link>
          </li>
          <li>
            <Link to='/dogs/new'>New Dog</Link>
          </li>
          <li>
            <Link to='/cats'>Cats</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
