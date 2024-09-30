import css from './Equipment.module.css';
import { HiOutlineTv } from 'react-icons/hi2';
import { TbFridge } from 'react-icons/tb';
import { BsWind, BsFuelPump, BsDroplet, BsDiagram3, BsCupHot, BsUiRadios } from 'react-icons/bs';
import { LuMicrowave } from 'react-icons/lu';

export default function Equipment({ camper }) {
  // Массив с доступным оборудованием и его иконками
  const equipment = [
    { name: 'transmission', label: 'Automatic', icon: <BsDiagram3 />, value: 'automatic' },
    { name: 'transmission', label: 'Manual', icon: <BsDiagram3 />, value: 'manual' },
    { name: 'kitchen', label: 'Kitchen', icon: <BsCupHot /> },
    { name: 'engine', label: 'Diesel', icon: <BsFuelPump />, value: 'diesel' },
    { name: 'engine', label: 'Petrol', icon: <BsFuelPump />, value: 'petrol' },
    { name: 'AC', label: 'AC', icon: <BsWind /> },
    { name: 'bathroom', label: 'Bathroom', icon: <BsDroplet /> },
    { name: 'TV', label: 'TV', icon: <HiOutlineTv /> },
    { name: 'radio', label: 'Radio', icon: <BsUiRadios /> },
    { name: 'refrigerator', label: 'Refrigerator', icon: <TbFridge /> },
    { name: 'microwave', label: 'Microwave', icon: <LuMicrowave /> },
    { name: 'gas', label: 'Gas', icon: <BsFuelPump /> },
    { name: 'water', label: 'Water', icon: <BsDroplet /> },
  ];

  // Фильтрация оборудования для конкретного camper
  const activeEquipment = equipment.filter(item => {
    if (item.name === 'transmission' || item.name === 'engine') {
      return camper[item.name] === item.value; // Специальная проверка для значений transmission и engine
    }
    return camper[item.name]; // Для всех остальных булевых значений
  });

  return (
    <ul className={css.container}>
      {activeEquipment.map(item => (
        <li key={item.name} className={css.item}>
          {item.icon}
          <span className={css.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
