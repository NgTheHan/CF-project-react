// src/apis/divine.api.js
import axios from "axios";

const BASE_URL = "https://divineshop.vn/api/product/list?slug=san-pham-ai";

export const getProducts = async (query = "") => {
  const res = await axios.get(BASE_URL, {
    params: {
      keyword: query,
    },
  });
  return res.data.data || [];
};
