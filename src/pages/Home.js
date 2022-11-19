import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [image, setImage] = useState();
  const fileSelectedHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    axios
      .post('http://localhost:3030/api/v1/upload', formData, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Upload Image</h1>
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <input type='file' name='image' onChange={fileSelectedHandler} />
        <button className='btn btn-primary' type='submit'>
          Upload
        </button>
      </form>
    </>
  );
}
