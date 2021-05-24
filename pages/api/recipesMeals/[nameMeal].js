import axios from 'axios';

const ingredientsWithMeasure = (recipeDetails) => {
  const keys = Object.keys(recipeDetails);
  const keysIngredientes = keys.reduce((acc, key) => {
    const match = key.match(/^strIngredient(\d+$)/);
    if (match && recipeDetails[match[0]]) {
      const index = match[1];
      acc.push({ingredient: recipeDetails[key], mesure: recipeDetails[`strMeasure${index}`]})
      return acc
    } return acc
  },[])
  return keysIngredientes;
}

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
};
