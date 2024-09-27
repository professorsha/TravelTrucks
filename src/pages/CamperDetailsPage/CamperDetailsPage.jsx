import css from './CatalogPage.module.css';
import { fetchCatalog } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors.js';
const CamperDetailsPage=()=>{
const campers = useSelector(selectCampers);
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchCatalog());
}, [dispatch]);

return(<>
<h1>hello</h1>
</>)
};
export default CamperDetailsPage;