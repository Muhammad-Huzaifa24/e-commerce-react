import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { addProduct } from "../services/apiService"; // Import the addProduct function

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await addProduct(product); // Use the addProduct function
      console.log(newProduct);

      toast.success("Product added successfully!", {
        style: {
          backgroundColor: "#004000",
          color: "#fff",
          fontSize: "14px",
          padding: "15px",
          borderRadius: "4px",
        },
      });

      // Navigate back to the home page
      history.push("/");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product", {
        style: {
          backgroundColor: "#ff0000",
          color: "#fff",
          fontSize: "14px",
          padding: "15px",
          borderRadius: "4px",
        },
      });
    }
  };

  return (
    <div className="add-product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
