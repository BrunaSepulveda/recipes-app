import axios from 'axios';

export default async function getRecipeByIngredients(req, res) {
  const { mainIngredient } = req.query;
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`);
  const meals = response.data.meals.map((meal) => ({ id: meal.idMeal, name: meal.strMeal, img: meal.strMealThumb }))
  res.status(200).json(meals);
}
