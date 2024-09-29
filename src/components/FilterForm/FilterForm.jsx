import css from './FilterForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { toggleImageEquipments, setImageType } from '../../redux/filters/slice'; // Импорт действий

const imageEquipments = [
  { id: 'AC', label: 'AC', icon: '/images/icons.svg#iconAC' },
  { id: 'Automatic', label: 'Automatic', icon: '/images/icons.svg#iconAutomatic' },
  { id: 'Kitchen', label: 'Kitchen', icon: '/images/icons.svg#iconKitchen' },
  { id: 'TV', label: 'TV', icon: '/images/icons.svg#iconTv' },
  { id: 'Bathroom', label: 'Bathroom', icon: '/images/icons.svg#iconBathroom' },
];

const imageType = [
  { id: 'Van', label: 'Van', icon: '/images/icons.svg#iconVan' },
  { id: 'FullyIntegrated', label: 'Fully Integrated', icon: '/images/icons.svg#iconFullyIntegrated' },
  { id: 'Alcove', label: 'Alcove', icon: '/images/icons.svg#iconAlcove' },
];

const FilterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ selectedEquipment: [], selectedType: '' }}
      onSubmit={(values, actions) => {
        const userData = {
          selectedEquipment: values.selectedEquipment,
          selectedType: values.selectedType,
        };

        // Вызываем действия Redux при сабмите формы
        userData.selectedEquipment.forEach(equipment => {
          dispatch(toggleImageEquipments(equipment));  // Обновляем выбранные фильтры по оборудованию
        });
        dispatch(setImageType(userData.selectedType));  // Обновляем тип транспортного средства

        console.log('Filtered Data:', userData);
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.formContainer}>
          <label htmlFor="locationFieldId" className={css.labelLocation}>
            Location
          </label>
          <div className={css.wrap}>
            <Field
              type="text"
              name="location"
              id="locationFieldId"
              className={css.inputFieldLocation}
            />
            <ErrorMessage name="location" component="span" className={css.errorMessage} />
          </div>

          <span>Filters</span>
          <h4>Vehicle Equipment</h4>
          <div className={css.imageCheckboxGroup}>
            {imageEquipments.map(option => (
              <label
                key={option.id}
                className={`${css.imageCheckboxLabel} ${values.selectedEquipment.includes(option.id) ? css.selected : ''}`}
                onClick={() => {
                  const newSelectedEquipment = values.selectedEquipment.includes(option.id)
                    ? values.selectedEquipment.filter(id => id !== option.id)
                    : [...values.selectedEquipment, option.id];

                  setFieldValue('selectedEquipment', newSelectedEquipment);
                }}
              >
                <svg
                  className={values.selectedEquipment.includes(option.id) ? `${css.imageCheckbox} ${css.selected}` : css.imageCheckbox}
                  width="32px"
                  height="32px"
                >
                  <use href={option.icon}></use>
                </svg>
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          <h4>Vehicle Type</h4>
          <div className={css.imageCheckboxGroup}>
            {imageType.map(option => (
              <label
                key={option.id}
                className={`${css.imageCheckboxLabel} ${values.selectedType === option.id ? css.selected : ''}`}
                onClick={() => {
                  setFieldValue('selectedType', option.id);
                }}
              >
                <svg
                  className={values.selectedType === option.id ? `${css.imageCheckbox} ${css.selected}` : css.imageCheckbox}
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
