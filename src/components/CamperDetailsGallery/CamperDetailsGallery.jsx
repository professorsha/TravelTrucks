import css from'./CamperDetailsGallery.module.css';

const CamperDetailsGallery=({camper})=>{
    return(<div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index} // Добавляем уникальный ключ для каждого элемента
            src={image.thumb}
            alt={`${camper.name} gallery image ${index + 1}`}
            
          />
        ))}
      </div>)
};
export default CamperDetailsGallery;