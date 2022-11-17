import React from 'react';

export default function Home() {
  return (
    <>
      <h1>Upload Image</h1>
      <form method='POST' action='/api/v1/dogs/upload' encType='multipart/form-data'>
        <input type='file' name='image' />
        <input type='submit' />
      </form>
    </>
  );
}
