import { Formik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FemaleForm } from './FemaleForm';
import { MaleForm } from './MaleForm';
import './GeneralForm.css';
export interface Student {
  name: string;
  age: number;
  email: string;
  rollNo: number;
  address: string;
  city: string;
  country: string;
  postalCode: number;
  gender: string;
}
/*
The below function is used to render the form for the student
*/

export function GeneralForm() {
  const initialValues: Student = {
    name: '',
    age: 20,
    email: '',
    rollNo: 0,
    address: '',
    city: '',
    country: '',
    postalCode: 110056,
    gender: 'Male'
  };
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="form_container">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            localStorage.setItem('student', JSON.stringify(values)); // storing the values in the local storage
            if (values.gender === 'Female') {
              navigate('/femaleform'); // Navigate to Female form
              <FemaleForm values={values} />;
            } else {
              navigate('/maleform'); // Navigate to Male Form
              <MaleForm values={values} />;
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container">
              <label htmlFor="name" className="form_item">
                Name*
              </label>
              <input
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="input_item"
                required
              />
              <label htmlFor="age" className="form_item">
                Age*
              </label>
              <input
                type={'number'}
                name={'age'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                className="input_item"
                required
              />
              <label htmlFor="email" className="form_item">
                Email*
              </label>
              <input
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="input_item"
                required
              />
              <label htmlFor="rollNo" className="form_item">
                Roll No*
              </label>
              <input
                type={'number'}
                name={'rollNo'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rollNo}
                className="input_item"
                required
              />
              <label htmlFor="address" className="form_item">
                Address*
              </label>
              <input
                type={'text'}
                name={'address'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                required
              />
              <label htmlFor="city" className="form_item">
                City*
              </label>
              <input
                type={'text'}
                name={'city'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                className="input_item"
                required
              />
              <label htmlFor="country" className="form_item">
                Country*
              </label>
              <input
                type={'text'}
                name={'country'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                className="input_item"
                required
              />
              <label htmlFor="postalCode" className="form_item">
                Postal Code*
              </label>
              <input
                type={'number'}
                name={'postalCode'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                className="input_item"
                required
              />
              <label htmlFor="gender" className="form_item">
                Gender*
              </label>
              <select
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <button type="submit" className="submit">
                Next
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
