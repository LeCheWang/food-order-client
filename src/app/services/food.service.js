import axios from "axios";

export async function getFoods(category_id){
  const result = await axios.get("http://localhost:5000/api/foods", {
    params: {
      category_id
    }
  });
  return result.data;
}