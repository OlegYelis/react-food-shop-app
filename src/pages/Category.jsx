import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategories } from 'api';
import { Preloader } from 'components/Preloader';
import { MealList } from 'components/MealList/MealList';

export const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategories(name).then(data => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
};
