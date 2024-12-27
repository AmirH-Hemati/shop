import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
  return data;
}

export async function getCategories() {
  const { data } = await axios.get(
    "https://fakestoreapi.in/api/products/category"
  );
  return data;
}
export async function getProduct(id) {
  const { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
  return data.find((item) => item.id == id);
}
