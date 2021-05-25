import axios from 'axios';

export default async function getAllCategories(req, res) {
  const { name } = req.query
  const response  = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const recipes = response.data.meals.map((recipe) => {
    return {
      id: recipe.idMeal,
      name: recipe.strMeal,
      img: recipe.strMealThumb,

    }
  });
  res.status(200).json(recipes);
};
