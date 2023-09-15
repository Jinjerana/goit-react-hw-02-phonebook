import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
      )
      .required(),
    number: yup
      .string()
      .trim()
      .matches(
        /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

export const Forma = ({ onAddContact }) => {
    return (
  <div>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{ 
        name: '',
        number: '' 
    }}

    validationSchema={schema}

      onSubmit={(values, { resetForm }) => {
        onAddContact({ id: nanoid(), ...values});
        resetForm();


        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="number">Number</label>
        <Field id="number" name="number" placeholder="+380100000000" />
                  <ErrorMessage name="number" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
        }

export default Forma;