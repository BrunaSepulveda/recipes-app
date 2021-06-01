import axios from 'axios';

export default async function getMealsByNameCategory(req, res) {
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
}


/* 
const numbers = [12, 5, 8, 130, 44];
filter, some, find

 numbers.every(function(num, index, array) {
  return num >= 10;;
});

numbers.reduce(function(acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
})


  propNames.forEach(function(element, index, array){
     console.log("a[" + index + "] = " + element);
  });


 numbers.map(function(num) {
  return num * 2;
});
*/