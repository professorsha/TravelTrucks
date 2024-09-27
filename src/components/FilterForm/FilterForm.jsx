import css from './FilterForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { filterSchema } from '../../validation.js';
// Массив с данными для чекбоксов
const imageOptions = [
  { id: 'AC', label: 'AC', image: '/path/to/AC.jpg' },
  { id: 'Automatic', label: 'Automatic', image: '/path/to/Automatic.jpg' },
  { id: 'Kitchen', label: 'Kitchen', image: '/path/to/Kitchen.jpg' },
  { id: 'TV', label: 'TV', image: '/path/to/TV.jpg' },
  { id: 'Bathroom', label: 'Bathroom', image: '/path/to/Bathroom.jpg' },
];
const imageType = [{}, {}, {}];

const FilterForm = () => {
  const locationFieldId = useId();
  const equipmentFieldId = useId();
  const typeFieldId = useId();
  return (
    <Formik
      initialValues={{ location: '', selectedEquipment: '', type: '' }}
      //   validationSchema={filterSchema}
      onSubmit={(values, actions) => {
        const userData = {
          location: values.location,
          selectedEquipment: values.selectedEquipment,
          type: values.type,
        };
        // dispatch(logIn(userData));

        console.log('Selected values:', userData.selectedEquipment);

        actions.resetForm();
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className={css.formContainer}>
          <label htmlFor={locationFieldId} className={css.label}>
            location
          </label>
          <div className={css.wrap}>
            <Field
              type="text"
              name="location"
              id={locationFieldId}
              className={css.inputField}
            />
            <ErrorMessage
              name="location"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <span>Filters</span>
          <div className="image-checkbox-group">
            {imageOptions.map(option => (
              <label
                key={option.id}
                className="image-checkbox-label"
                onClick={() => {
                  // Изменяем состояние, если картинка выбрана
                  const newSelectedEquipment =
                    values.selectedEquipment.includes(option.id)
                      ? values.selectedEquipment.filter(id => id !== option.id)
                      : [...values.selectedEquipment, option.id];

                  setFieldValue('selectedEquipment', newSelectedEquipment);
                }}
              >
            {/* Используем картинку как "чекбокс" */}
            <img
                  src={option.image}
                  alt={option.label}
                  className={
                    values.selectedEquipment.includes(option.id)
                      ? 'image-checkbox selected'
                      : 'image-checkbox'
                  }
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          {/* Показываем ошибку, если ни один чекбокс не выбран */}
          {errors.selectedEquipment && touched.selectedEquipment && (
            <div className="error">{errors.selectedEquipment}</div>
          )}

          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
