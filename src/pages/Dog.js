import React from 'react';
import useFetch from '../utils/useFetch';

export default function Dog() {
  const { loading, error, value } = useFetch('http://localhost:3030/api/v1/dogs');
  console.log(value);
  return <div>Dog</div>;
}
