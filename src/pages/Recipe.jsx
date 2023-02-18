import { Preloader } from 'components/Preloader';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from 'api';

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <div className="recipe__header">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div>
              <h2 className="recipe__name">{recipe.strMeal}</h2>
              <h3 className="recipe__category">
                Category: {recipe.strCategory}
              </h3>
              {recipe.strArea && (
                <h3 className="recipe__area">Area: {recipe.strArea}</h3>
              )}
            </div>
          </div>

          <p className="recipe__instr">{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map(key => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube && (
            <div className="recipe__video">
              <h3>Video Recipe</h3>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
              />
            </div>
          )}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
};
