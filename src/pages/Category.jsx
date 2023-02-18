import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategories } from 'api';
import { Preloader } from 'components/Preloader';
import { MealList } from 'components/MealList/MealList';

export const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategories(name).then(data => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};
