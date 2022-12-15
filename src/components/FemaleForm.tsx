import * as React from 'react';
import { Student } from './GeneralForm';

import { Formik } from 'formik';
import './GeneralForm.css';
import { useNavigate } from 'react-router-dom';
/* Extending the values for the female student*/

interface FemaleStudent extends Student {
  job: string;
  graduatingyear: number;
  company?: string;
  diversityhiring?: string;
}
/*
@params values: any
*/
export function FemaleForm(values: any) {
  const initialValues: FemaleStudent = {
    job: 'Yes',
    graduatingyear: 2023,
    company: '',
    diversityhiring: 'No',
    name: values.name,
    age: values.age,
    email: values.email,
    rollNo: values.rollNo,
    address: values.address,
    city: values.city,
    country: values.country,
    postalCode: values.postalCode,
    gender: values.gender
  };
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="form_container">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            localStorage.setItem('femaleStudent', JSON.stringify(values)); // Store the data in local storage
            navigate('/results'); // Navigate to the results page
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container">
              <label htmlFor="job">Job*</label>
              <select
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label htmlFor="graduatingyear">Graduating Year*</label>
              <input
                type={'number'}
                name={'graduatingyear'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.graduatingyear}
                required
              />

              <label htmlFor="company">Company</label>
              <input
                type={'text'}
                name={'company'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company}
              />
              <label htmlFor="diversityhiring">Diversity Hiring(Yes/No)?</label>
              <select
                name="diversityhiring"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
