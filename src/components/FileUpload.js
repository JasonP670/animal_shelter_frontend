import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FileUpload({ imageHandler }) {
  return (
    <>
      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>File Upload</Form.Label>
        <Form.Control type='file' name='image' onChange={imageHandler} />
      </Form.Group>
    </>
  );
}
