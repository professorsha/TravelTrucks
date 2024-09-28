import * as Yup from 'yup';

export const filterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  selectedEquipment: Yup.array().min(1, 'Select at least one option'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
});
export const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email().required('Required'),
    bookingDate: Yup.date().required('Required'),
    comment: Yup.string().min(10, 'Too Short!').max(600, 'Too Long!'),
  });