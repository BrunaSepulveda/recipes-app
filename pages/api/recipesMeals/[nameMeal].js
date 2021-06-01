import axios from 'axios';
import { ingredientsWithMeasure } from '../../../util/functions';

export default async function getRecipeDetails(req, res) {
  const { nameMeal } = req.query
  const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
  const recipes = response.data.meals.map((recipeDetails) => {
    const listIngredientsWithMeasure = ingredientsWithMeasure(recipeDetails);
    return {
      id: recipeDetails.idMeal,
      name: recipeDetails.strMeal,
      img: recipeDetails.strMealThumb,
      category: recipeDetails.strCategory,
      origin: recipeDetails.strArea,
      instructions: recipeDetails.strInstructions,
      tags: recipeDetails.strTags,
      video: recipeDetails.strYoutube,
      ingredientsAndMeasure: listIngredientsWithMeasure,
    }
  });
  res.status(200).json(recipes);
}
