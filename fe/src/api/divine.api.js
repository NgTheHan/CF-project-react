// src/apis/divine.api.js

const BASE_URL = "https://api.divineshop.vn/v2";

/**
 * Lấy danh sách sản phẩm theo từ khóa tìm kiếm
 * @param {string} keyword
 */
export const getProductsByKeyword = async (keyword) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?search=${encodeURIComponent(keyword)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi tìm kiếm sản phẩm:", error);
    return [];
  }
};

/**
 * Lấy chi tiết sản phẩm theo ID
 * @param {string|number} id
 */
export const getProductDetail = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
    return null;
  }
};

/**
 * Lấy danh mục sản phẩm
 */
export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    return [];
  }
};
