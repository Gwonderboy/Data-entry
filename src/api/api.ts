import axios from "./axios";

export const fetchProductCategories = async () => {
  try {
    const response = await axios.get('/api/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }
};

