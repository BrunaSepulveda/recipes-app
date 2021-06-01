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

export {
  ingredientsWithMeasure,
}