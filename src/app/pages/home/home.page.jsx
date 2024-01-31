import { useEffect, useState } from "react"
import { getCategory } from "../../services/category.service";
import { getFoods } from "../../services/food.service";
import StorageService from "../../services/storage.service";
import CartService from "../../services/cart.service";

function Home(){
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [currentCategoryID, setCurrentCategoryID] = useState();
  const loginAccount = StorageService.getObject("loginAccount");
 
  useEffect(()=>{
    async function fetchDataCategories(){
      const cate = await getCategory();
      const firstCate = cate[0];
      setCurrentCategoryID(firstCate._id);
      setCategories(cate);
    }
    fetchDataCategories();
  }, []);

  useEffect(()=> {
    async function fetchDataFood(){
      const foods = await getFoods(currentCategoryID);
      setFoods(foods);
    }
    fetchDataFood();
  }, [currentCategoryID])

  const handleAddToCart = async (id) => {
    await CartService.addToCart({account_id: loginAccount._id, food_id: id, quantity: 1});
    alert("Added to cart!");
  }

  return (
    <div>
      <ul className="flex justify-center">
        {categories && categories.map((category, index) => {
          return (
            <li onClick={()=> setCurrentCategoryID(category._id)} className="w-[200px] m-4 text-center shadow-sm shadow-black rounded-xl overflow-hidden cursor-pointer hover:bg-[#5ab7fd]" key={index}>
              <h1 className="font-bold text-xl">{category.name}</h1>
              <img className="hover:scale-150 transition-all" src={category.img} alt="" />
            </li>
          )
        })}
      </ul>
      <ul className="flex flex-wrap justify-around text-center">
        {foods && foods.map((food, index)=>{
          return (
            <li className="w-[300px] mx-4 shadow-sm shadow-black mt-8 rounded-xl overflow-hidden" key={index}>
              <div className="h-[200px] overflow-hidden">
                <img className="w-full h-full" src={food.img} alt="" />
              </div>
              <h1 className="text-xl mt-2">{food.name}</h1>
              <p className="text-left pl-2">{food.price} VNĐ</p>
              <p className="text-left">{food.address}</p>
              <p onClick={() => handleAddToCart(food._id)} className="bg-[#333] text-white p-2 cursor-pointer hover:bg-[#b1b1b1] hover:text-[#6bebff]">Thêm vào giỏ</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home;