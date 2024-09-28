import css from'./CamperDetailsGallery.module.css';

const CamperDetailsGallery=({camper})=>{
    return(<>
    <img src={camper.gallery[0].thumb} alt={camper.name} width="400px" />
    </>)
};
export default CamperDetailsGallery;