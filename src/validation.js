import * as Yup from 'yup';
export const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email().required('Required'),
    bookingDate: Yup.date().required('Required'),
    comment: Yup.string().min(10, 'Too Short!').max(600, 'Too Long!'),
  });