import axios from "axios";
import { BASE_URL } from "../constant/url";

class _CartService {
  async addToCart({ account_id, food_id, quantity }) {
    const result = await axios.post(`${BASE_URL}/cart`, {
      account_id,
      food_id,
      quantity,
    });

    return result.data;
  }

  async getCartOfAccount(account_id) {
    const result = await axios.get(`${BASE_URL}/cart/account/${account_id}`);
    return result.data;
  }

  async updateItemQuantity(account_id, item_id, quantity) {
    const result = await axios.patch(
      `${BASE_URL}/cart/account/${account_id}/item/${item_id}`,
      { quantity }
    );

    return result.data;
  }
}

const CartService = new _CartService();

export default CartService;
