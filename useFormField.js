import { useState, useEffect } from 'react';

const useFormField = (initialValue, validate, errorMessages) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const validationError = validate(value);
    setError(validationError || '');
  }, [value, validate]);

  return { value, error, handleChange };
};

export default useFormField;
