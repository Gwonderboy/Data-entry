import axios from "./axios";

export const fetchProductCategories = async () => {
  try {
    const response = await axios.get('/api/categories/getAllCategories');
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }
};

export const submitOrder = async(data: any)=>{
  try {
    const response = await axios.post("/api/orders/create", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error submitting order:', error.response);
    throw new Error('Failed to submit order');
  }
}

