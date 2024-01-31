import axios from "axios";
import { BASE_URL } from "../constant/url";

class _OrderServie {
  async createOrder(body){
    const result = await axios.post(`${BASE_URL}/order`, body);

    return result.data;
  }

  async getOrderByAccount(account_id){
    const result = await axios.get(`${BASE_URL}/order/${account_id}`);

    return result.data;
  }
}

const OrderService = new _OrderServie();

export default OrderService;