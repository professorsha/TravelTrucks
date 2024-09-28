import css from './BookingForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { BookingSchema } from '../../validation.js';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Стили для календаря

export default function BookingForm() {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    toast.success(
      `Thanks, ${values.name}, you booked a camper for the ${values.bookingDate}! Great choice!`
    );
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.group}>
        <h2 className={css.header}>Book your campervan now</h2>
        <p className={css.connect}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={{ name: '', email: '', bookingDate: '' }}
          onSubmit={handleSubmit}
          validationSchema={BookingSchema}
        >
          {/* {({ setFieldValue, values }) => ( */}
          <Form className={css.formContainer}>
            <Field
              type="text"
              name="name"
              id={`${fieldId}-name`}
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="span" className={css.error} />

            <Field
              type="text"
              name="email"
              id={`${fieldId}-email`}
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" className={css.error} />
            <Field
              type="date"
              name="bookingDate"
              id={`${fieldId}-bookingDate`}
              placeholder="Booking date*"
              className={css.input}
            />
            <ErrorMessage
              name="bookingDate"
              component="span"
              className={css.error}
            />
            {/* Календарь DatePicker */}
            {/* <div className={css.datepickerContainer}>
                <DatePicker
                  selected={values.bookingDate}
                  onChange={(val) => setFieldValue('bookingDate', val)}
                  dateFormat="dd/MM/yyyy"
                  className={css.input}
                  placeholderText="Select booking date*"
                />
              </div>
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              /> */}

            <Field
              as="textarea"
              cols="20"
              rows="5"
              type="text"
              name="comment"
              id={`${fieldId}-comment`}
              placeholder="Comment"
              className={css.area}
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={css.error}
            />

            <button type="submit" className={css.button}>
              Send
            </button>
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
          </Form>
          {/* )} */}
        </Formik>
      </div>
    </div>
  );
}
