export const getAllProductsApi = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export const getProductsByCategoryApi = async (category) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};
