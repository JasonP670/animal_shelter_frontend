import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MuiPicker from '../MuiPicker';
import axios from 'axios';
import { postRequest } from '../utils';

export default function NewDog({ children }) {
  const [data, setData] = useState({ name: '', intakeDate: new Date(), gender: -1, size: -1, color: '', breed: '', housetrained: -1 });
  const [error, setError] = useState('');

  const handleDateChange = (e) => {
    let d = { ...data };
    d.intakeDate = e;
    setData(d);
  };

  const handleChangeStrings = (value, e) => {
    let d = { ...data, [value]: e.target.value };
    setData(d);
  };

  const handleChangeInts = (value, e) => {
    let d = { ...data, [value]: parseInt(e.target.value) };
    setData(d);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const [valid, err] = validateData();
    if (err) {
      setError(err);
      return;
    }

    if (valid && !err) {
      const response = await postRequest('dogs', data);
      console.log(response);
      if (response.error) {
        console.log(`ERROR: ${response.error}`);
        return;
      }
      console.log(`SUCCESS: ${response.res.id}`);
    }
  };

  const validateData = () => {
    const d = data;
    if (!d.name) {
      return [false, 'Please enter a name.'];
    }

    if (d.gender === -1) {
      return [false, 'Please select a gender.'];
    }

    if (!d.breed) {
      return [false, 'Please enter a breed.'];
    }

    if (d.size === -1) {
      return [false, 'Please select a size.'];
    }

    if (!d.color) {
      return [false, 'Please enter a color.'];
    }

    if (d.housetrained === -1) {
      return [false, 'Please select if housetrained.'];
    }

    if (!d.intakeDate) {
      return [false, 'Please select an intake date.'];
    }

    return [true, null];
  };

  return (
    <>
      {error && <div>{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder="Dog's name" onChange={(e) => handleChangeStrings('name', e)} value={data.name} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label='Gender' onChange={(e) => handleChangeInts('gender', e)}>
            <option>Please select the dog's gender</option>
            <option value='1'>Male</option>
            <option value='2'>Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Breed</Form.Label>
          <Form.Control type='text' placeholder="Dog's breed" onChange={(e) => handleChangeStrings('breed', e)} value={data.breed} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Size</Form.Label>
          <Form.Select aria-label='Size' onChange={(e) => handleChangeInts('size', e)} value={data.size}>
            <option>Please select the size</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option value='3'>Large</option>
            <option value='4'>Extra Large</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Color</Form.Label>
          <Form.Control type='text' placeholder="Dog's Color" value={data.color} onChange={(e) => handleChangeStrings('color', e)} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Housetrained</Form.Label>
          <Form.Select aria-label='House Trained' onChange={(e) => handleChangeInts('housetrained', e)}>
            <option>Please select an option</option>
            <option value='0'>No</option>aa
            <option value='1'>Yes</option>
            <option value='1'>Unknown</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Intake Date</Form.Label>
          <MuiPicker selectedDate={data.intakeDate} handleDateChange={handleDateChange} />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
}
