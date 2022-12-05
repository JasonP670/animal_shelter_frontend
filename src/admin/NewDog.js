import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import MuiPicker from '../components/MuiPicker';
import useForm from '../utils/useForm';

export default function NewDog() {
  const { error, values, handleChange, handleSubmit, handleDateChange, handleImageChange } = useForm({
    callback: submit,
    initValues: {
      name: '',
      gender: '',
      breed: '',
      size: '',
      color: '',
      housetrained: '',
      intakeDate: '',
    },
  });

  function submit() {
    console.log(values);
  }

  return (
    <>
      {error && <Alert variant='danger'>{error} Not Submitted.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>File Upload</Form.Label>
          <Form.Control type='file' name='image' onChange={handleImageChange} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' placeholder="Dog's name" onChange={handleChange} value={values.name} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label='Gender' name='gender' onChange={handleChange}>
            <option>Please select the dog's gender</option>
            <option value='1'>Male</option>
            <option value='2'>Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Breed</Form.Label>
          <Form.Control type='text' placeholder="Dog's breed" name='breed' onChange={handleChange} value={values.breed} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Size</Form.Label>
          <Form.Select aria-label='Size' name='size' onChange={handleChange} value={values.size}>
            <option>Please select the size</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option value='3'>Large</option>
            <option value='4'>Extra Large</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Color</Form.Label>
          <Form.Control type='text' name='color' placeholder="Dog's Color" value={values.color} onChange={handleChange} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Housetrained</Form.Label>
          <Form.Select aria-label='House Trained' name='housetrained' onChange={handleChange}>
            <option>Please select an option</option>
            <option value='0'>No</option>aa
            <option value='1'>Yes</option>
            <option value='1'>Unknown</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Intake Date</Form.Label>
          <MuiPicker selectedDate={values.intakeDate} name='intakeDate' handleChange={handleDateChange} />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
}
