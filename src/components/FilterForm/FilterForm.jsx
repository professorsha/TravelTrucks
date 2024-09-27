import css from './FilterForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { filterSchema } from '../../validation.js';
// Массив с данными для чекбоксов

const imageEquipments = [
  { id: 'AC', label: 'AC', icon: '/images/icons.svg#iconAC' },
  {
    id: 'Automatic',
    label: 'Automatic',
    icon: '/images/icons.svg#iconAutomatic',
  },
  { id: 'Kitchen', label: 'Kitchen', icon: '/images/icons.svg#iconKitchen' },
  { id: 'TV', label: 'TV', icon: '/images/icons.svg#iconTv' },
  { id: 'Bathroom', label: 'Bathroom', icon: '/images/icons.svg#iconBathroom' },
];
const imageType = [
  { id: 'Van', label: 'Van', icon: '/images/icons.svg#iconVan' },
  {
    id: 'FullyIntegrated',
    label: 'Fully Integrated',
    icon: '/images/icons.svg#iconFullyIntegrated',
  },
  { id: 'Alcove', label: 'Alcove', icon: '/images/icons.svg#iconAlcove' },
];

const FilterForm = () => {
  const locationFieldId = useId();
  const equipmentFieldId = useId();
  const typeFieldId = useId();
  return (
    <Formik
      initialValues={{ location: '', selectedEquipment: [], selectedType: '' }}
      //   validationSchema={filterSchema}
      onSubmit={(values, actions) => {
        const userData = {
          location: values.location,
          selectedEquipment: values.selectedEquipment,
          selectedType: values.selectedType,
        };
        // dispatch(logIn(userData));

        console.log(
          'Selected values:',
          userData.selectedEquipment,
          userData.selectedType
        );

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
          <h4>Vehicle equipment</h4>
          <div className={css.imageCheckboxGroup}>
            {imageEquipments.map(option => (
              <label
                key={option.id}
                className={css.imageCheckboxLabel}
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
                <svg
                  className={
                    values.selectedEquipment.includes(option.id)
                      ? 'imageCheckbox selected'
                      : 'imageCheckbox'
                  }
                  width="32px"
                  height="32px"
                >
                  <use href={option.icon}></use>
                </svg>
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          {/* Показываем ошибку, если ни один чекбокс не выбран */}
          {errors.selectedEquipment && touched.selectedEquipment && (
            <div className="error">{errors.selectedEquipment}</div>
          )}
          <h4>Vehicle type</h4>
          <div className={css.imageCheckboxGroup}>
            {imageType.map(option => (
              <label
                key={option.id}
                className={css.imageCheckboxLabel}
                onClick={() => {
                  //   // Изменяем состояние, если картинка выбрана
                  //   const newSelectedType = values.selectedType.includes(
                  //     option.id
                  //   )
                  //     ? values.selectedType.filter(id => id !== option.id)
                  //     : [...values.selectedType, option.id];

                  setFieldValue('selectedType', option.id);
                }}
              >
                {/* Используем картинку как "чекбокс" */}
                <svg
                  className={
                    values.selectedEquipment.includes(option.id)
                      ? 'imageCheckbox selected'
                      : 'imageCheckbox'
                  }
                  width="32px"
                  height="32px"
                >
                  <use href={option.icon}></use>
                </svg>
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          {/* Показываем ошибку, если ни один чекбокс не выбран */}
          {errors.selectedType && touched.selectedType && (
            <div className="error">{errors.selectedType}</div>
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
