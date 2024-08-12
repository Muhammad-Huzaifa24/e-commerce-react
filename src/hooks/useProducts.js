// // hooks/useProduct.js
// import useSWR from "swr";
// import {
//   fetchProducts,
//   fetchProductById,
//   deleteProduct,
//   addProduct as apiAddProduct,
// } from "../services/apiService";

// export const useProduct = (id = null) => {
//   const fetcher = id ? () => fetchProductById(id) : fetchProducts;
//   const { data, error, mutate } = useSWR(
//     id ? `/products/${id}` : "/products",
//     fetcher
//   );

//   // Function to delete a product
//   const removeProduct = async (productId) => {
//     try {
//       const response = await deleteProduct(productId); // Call the delete function from API service
//       console.log("Deleted product response:", response.data);

//       // Update the local state optimistically
//       mutate(
//         (currentData) =>
//           currentData
//             ? currentData.filter((product) => product.id !== productId)
//             : [],
//         false // Do not revalidate immediately
//       );
//     } catch (err) {
//       console.error("Failed to delete the product:", err);
//     }
//   };

//   // Function to add a product
//   const addProduct = async (newProduct) => {
//     try {
//       // undefined
//       const response = await apiAddProduct(newProduct);
//       console.log("Added product response from API: hook", response);

//       console.log("Response data: in the hook", response.data);

//       // Update the local state optimistically
//       // Update the local state optimistically
//       mutate(
//         (currentData) =>
//           currentData ? [...currentData, response.data] : [response.data],
//         false // Do not revalidate immediately
//       );

//       return response.data;
//     } catch (err) {
//       console.error("Failed to add the product:", err);
//       throw err;
//     }
//   };

//   return {
//     product: id ? data : null,
//     products: !id ? data : null,
//     isLoading: !error && !data,
//     isError: error,
//     removeProduct,
//     addProduct,
//   };
// };
