import React, { useState, useEffect } from 'react';

const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    }

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } 
        else if (!/\S+@\S+.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        return errors;
    }

    useEffect(() => {
        setErrors(validate(values));
    }
        , [values, touched]);
    
    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
    }
}

export default useForm;