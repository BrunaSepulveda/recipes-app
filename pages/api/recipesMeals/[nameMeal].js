import axios from 'axios';

const ingredientsWithMeasure = (ingredients, measure) => {
  const list = ingredients.reduce((accumulator, currentValue, index) => {
    const ingredientWithMeasure = currentValue + " " + measure[index];
    return [...accumulator, ingredientWithMeasure]
  }, []);
  return list;
}
const itens = (recipeDetails, element) => {
  const list = Array(19).fill(0).reduce((acc, _currentValue, index) => {
    if (!recipeDetails[`${element}${index + 1}`]) {
      return acc
    }
    const ingredient = recipeDetails[`${element}${index + 1}`]
    return [...acc, ingredient]
  }, []);
  return list;
};

export default async function getAllCategories(req, res) {
  const { nameMeal } = req.query
  const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
  const recipes = response.data.meals.map((recipeDetails) => {
    const listIngredients = itens(recipeDetails, "strIngredient");
    const listMeasure = itens(recipeDetails, "strMeasure");
    const listIngredientsWithMeasure = ingredientsWithMeasure(listIngredients, listMeasure);
    return {
      id: recipeDetails.idMeal,
      name: recipeDetails.strMeal,
      img: recipeDetails.strMealThumb,
      category: recipeDetails.strCategory,
      origin: recipeDetails.strArea,
      instructions: recipeDetails.strInstructions,
      tags: recipeDetails.strTags,
      video: recipeDetails.strYoutube,
      ingredients: listIngredients,
      measure: listMeasure,
      ingredientsAndMeasure: listIngredientsWithMeasure,
    }
  });
  res.status(200).json(recipes);
};
