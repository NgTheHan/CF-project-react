// src/apis/divine.api.js
import axios from "axios";

const BASE_URL = "https://divineshop.vn/api/product/list?slug=san-pham-ai";

export const getAllProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
