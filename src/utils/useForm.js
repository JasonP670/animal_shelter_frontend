import { useState } from 'react';

const useForm = ({ callback, initValues = {} }) => {
  const [values, setValues] = useState(initValues);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const [valid, err] = validateData();
    if (valid) {
      callback();
    } else {
      setError(err);
    }
  };

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (e) => {
    setValues((v) => ({ ...v, intakeDate: e }));
  };

  const handleImageChange = (e) => {
    setValues((v) => ({ ...v, image: e.target.files[0] }));
  };

  const validateData = () => {
    const d = values;
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

  return {
    handleChange,
    handleSubmit,
    handleDateChange,
    handleImageChange,
    values,
    error,
  };
};

export default useForm;
