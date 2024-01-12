import { useEffect, useState } from "react"
import { getCategory } from "../../services/category.service";
import { getFoods } from "../../services/food.service";

function Home(){
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const cate = await getCategory();
      const firstCate = cate[0];
      const foods = await getFoods(firstCate._id);
      setFoods(foods);
      setCategories(cate);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex justify-center">
        {categories && categories.map((category, index) => {
          return (
            <li className="w-[200px] m-4 text-center" key={index}>
              <h1 className="font-bold text-xl">{category.name}</h1>
              <img src={category.img} alt="" />
            </li>
          )
        })}
      </ul>
      <ul className="flex flex-wrap justify-around text-center">
        {foods && foods.map((food, index)=>{
          return (
            <li className="w-[300px] h-[400px] mx-4" key={index}>
              <h1>{food.name}</h1>
              <div className="h-[200px] overflow-hidden">
                <img className="w-full h-full" src={food.img} alt="" />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home;