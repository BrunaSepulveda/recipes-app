import axios from 'axios';
import { ingredientsWithMeasure } from '../../../util/functions';

export default async function getRecipeDetailsById(req, res) {
  const { id } = req.query
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const recipe = response.data.meals[0];
  console.log(recipe)
  const listIngredientsWithMeasure = ingredientsWithMeasure(recipe);
  const recipeDetails = {
    id: recipe.idMeal,
    name: recipe.strMeal,
    img: recipe.strMealThumb,
    category: recipe.strCategory,
    origin: recipe.strArea,
    instructions: recipe.strInstructions,
    tags: recipe.strTags,
    video: recipe.strYoutube,
    ingredientsAndMeasure: listIngredientsWithMeasure,
  }
  res.status(200).json(recipeDetails);
}