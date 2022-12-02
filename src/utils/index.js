import axios from 'axios';

export const getRequest = async (url) => {
  let res, error;
  await axios
    .get(`http://localhost:3030/api/v1/${url}`)
    .then((resp) => {
      res = resp.data;
    })
    .catch((err) => {
      error = err;
    });
  return { res, error };
};

export const postRequest = async (url, data) => {
  let res;
  let error;
  await axios
    .post(`http://localhost:3030/api/v1/${url}`, data)
    .then((resp) => {
      res = resp.data;
    })
    .catch((err) => {
      error = err;
    });
  return { res, error };
};
