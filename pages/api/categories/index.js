import axios from 'axios';

export default async function getAllCategories(_req, res) {
  const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
  const categories = response.data.categories.map((category) => {
    return {
      id: category.idCategory,
      name: category.strCategory,
      img: category.strCategoryThumb,
    }
  });
  res.status(200).json(categories);
}
