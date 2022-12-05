import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function NewDogs() {
  const [data, setData] = useState({});
  const [img, setImg] = useState([]);

  return (
    <>
      <img src={'https://storage.cloud.google.com/my-test-23453345/214818e8-f904-40e4-9b2a-3b240f55baa1.jpg'} />
      <h1>Add a new dog</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => {
              data.email = e.target.value;
              setData(data);
            }}
          />
          <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          Submit
        </Button>
      </Form>
      <form method='POST' action='/api/v1/dogs/upload' encType='multipart/form-data'>
        <input type='file' name='image' />
        <input type='submit' />
      </form>
    </>
  );
}
