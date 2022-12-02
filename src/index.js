import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NewDogs from './pages/NewDogs';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './admin/Layout';
import AdminDogs from './admin/Dog';
import AdminDogsNew from './admin/NewDog';
import AdminCats from './admin/Cat';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  // Admin Site
  if (window.location.host.split('.')[0] === 'admin') {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AdminLayout />}>
              {/* <Route index element={<AdminDogs />} /> */}

              <Route path='/dogs' element={<AdminDogs />} />
              <Route path='/dogs/new' element={<AdminDogsNew />} />

              <Route path='/cats' element={<AdminCats />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    );
  } else {
    // Customer site
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='newdog' element={<NewDogs />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

root.render(<App />);
