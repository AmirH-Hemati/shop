import axios from "axios";

export async function login({ username, password }) {
  const response = await axios.post("https://dummyjson.com/auth/login", {
    username,
    password,
  });
  return response.data;
}
