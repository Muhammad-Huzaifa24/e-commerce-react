import React from "react";
import Cart from "../components/Cart";
import useDelayedLoading from "../hooks/useDelayLoading";
import Loader from "../components/Loader";

const CartPage = () => {
  const loading = useDelayedLoading(500); // Adjust the delay as needed

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="cart-page">
        <Cart />
      </div>
    </>
  );
};

export default CartPage;
