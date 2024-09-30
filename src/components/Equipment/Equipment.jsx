import css from './Equipment.module.css';
export default function Equipment({camper}) {
    console.log(camper);
    
    return (
      <div className={css.container}>
        
        <span>{camper.transmission}</span>
      </div>
    );
  }