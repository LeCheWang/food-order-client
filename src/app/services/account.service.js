import axios from "axios";

export async function login(account) {
  const result = await axios.post(
    "http://localhost:5000/api/accounts/login",
    account
  );

  return result.data;
}

export async function register(account) {
  const result = await axios.post(
    "http://localhost:5000/api/accounts/register",
    account
  );

  return result.data;
}
