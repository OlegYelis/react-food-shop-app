import { MealItem } from './MealItem';

export const MealList = ({ meals = [] }) => {
  return (
    <ul className="list">
      {meals.map(el => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </ul>
  );
};
