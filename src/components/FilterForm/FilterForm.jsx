import css from './FilterForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectImageEquipments, selectImageType } from '../../redux/filters/selectors';
// import { setLocation, toggleImageEquipments, setImageType } from '../../redux/filters/slice';
// import { toggleImageEquipments, setImageType } from '../../redux/filters/slice';
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
//    const locationFieldId = useId();
  const dispatch = useDispatch();

  // Достаем значения фильтров из состояния Redux
//   const selectedEquipments = useSelector(selectImageEquipments);
//   const selectedType = useSelector(selectImageType);

  return (
    <Formik
    //   initialValues={{ location: '', selectedEquipment: selectedEquipments, selectedType: selectedType }}
      initialValues={{ selectedEquipment: [], selectedType: '' }}
      
      onSubmit={(values, actions) => {
        const userData = {
        //   location: values.location,
          selectedEquipment: values.selectedEquipment,
          selectedType: values.selectedType,
        };

        // Обновляем состояние фильтров в Redux
        // dispatch(setLocation(values.location));
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.formContainer}>
          <label htmlFor='locationFieldId' className={css.label}>
            location
          </label>
          <div className={css.wrap}>
            <Field
              type="text"
              name="location"
            id='locationFieldId'
              className={css.inputField}
            //   onChange={(e) => {
            //     const { value } = e.target;
            //     setFieldValue('location', value);
            //     dispatch(setLocation(value)); // Обновляем location в Redux
            //   }}
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
                  const newSelectedEquipment =
                    values.selectedEquipment.includes(option.id)
                      ? values.selectedEquipment.filter(id => id !== option.id)
                      : [...values.selectedEquipment, option.id];

                  setFieldValue('selectedEquipment', newSelectedEquipment);

                  // Обновляем фильтры по imageEquipments в Redux
                //   dispatch(toggleImageEquipments(option.id));
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

          <h4>Vehicle type</h4>
          <div className={css.imageCheckboxGroup}>
            {imageType.map(option => (
              <label
                key={option.id}
                className={css.imageCheckboxLabel}
                onClick={() => {
                  setFieldValue('selectedType', option.id);
                  
                  // Обновляем тип автомобиля в Redux
                //   dispatch(setImageType(option.id));
                }}
              >
                <svg
                  className={
                    values.selectedType === option.id
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

          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
