import axios from 'axios';

export default async function getAllAreas(_req, res) {
  const response  = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const areas = response.data.meals.map((area) =>  area.strArea);
  res.status(200).json(areas);
}