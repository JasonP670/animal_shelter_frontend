import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MuiPicker from '../MuiPicker';

export default function NewDog({ children }) {
  // const [intakeDate, setIntakeDate] = useState(null);
  const [data, setData] = useState({ name: '', intakeDate: null, gender: null, size: null, color: '' });

  const handleDateChange = (e) => {
    let d = { ...data };
    d.intakeDate = e;
    setData(d);
  };

  const handleChange = (value, e) => {
    let d = { ...data, [value]: e.target.value };
    setData(d);
  };

  return (
    <div className='container'>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder="Dog's name" onChange={(e) => handleChange('name', e)} value={data.name} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label='Gender' onChange={(e) => handleChange('gender', e)}>
            <option>Please select the dog's gender</option>
            <option value='1'>Male</option>
            <option value='2'>Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Size</Form.Label>
          <Form.Select aria-label='Size'>
            <option>Please select the size</option>
            <option value='1'>Small</option>
            <option value='2'>Medium</option>
            <option value='3'>Large</option>
            <option value='4'>Extra Large</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Color</Form.Label>
          <Form.Control type='text' placeholder="Dog's Color" />
        </Form.Group>
      </Form>

      <Form.Group className='mb-3'>
        <Form.Label>Housetrained</Form.Label>
        <Form.Select aria-label='Size'>
          <option>Please select an option</option>
          <option value='0'>No</option>
          <option value='1'>Yes</option>
          <option value='1'>Unknown</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Intake Date</Form.Label>
        <MuiPicker selectedDate={data.intakeDate} handleDateChange={handleDateChange} />
      </Form.Group>

      <Button onClick={() => console.log(data)}>Submit</Button>
    </div>
  );
}
