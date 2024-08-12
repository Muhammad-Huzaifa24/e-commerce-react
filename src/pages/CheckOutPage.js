import React from "react";
import OrderForm from "../components/OrderForm";
import Loader from "../components/Loader";
import useCart from "../hooks/useCart";
import useDelayedLoading from "../hooks/useDelayLoading";
import { useHistory } from "react-router-dom";

const CheckoutPage = () => {
  const history = useHistory();
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const handleGoBack = () => {
    history.goBack(); // Navigates to the previous page
  };
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
      <button
        onClick={handleGoBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "#333",
        }}
      >
        ←
      </button>
      <div
        className="checkout-page"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px",
          marginTop: "5rem",
          backgroundColor: "",
        }}
      >
        {/* <h2
        style={{
          fontFamily: "Jost",
          marginBottom: "20px",
          fontSize: "38px",
          textAlign: "center",
        }}
      >
        Checkout
      </h2> */}

        <div
          className="checkout-content"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div
            className="checkout-summary"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <div className="cart-items" style={{ flex: 1 }}>
              <div
                className="svg-heading"
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  width={30}
                  height={30}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <h3
                  style={{
                    fontFamily: "Jost",
                    color: "darkgreen",

                    fontSize: "30px",
                  }}
                >
                  Your Cart
                </h3>
              </div>

              <hr />
              {cart.length === 0 ? (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#555",
                  }}
                >
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="checkout-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #ddd",
                      padding: "20px 20px",
                      marginBottom: "10px",
                      background: "#f3f3f3",
                      borderRadius: "10px",
                      boxShadow: "0 4px 6px rgba(211, 211, 211, 0.6)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginRight: "15px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          marginBottom: "5px",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="price-qnt"
                        style={{ fontSize: "16px", color: "#555" }}
                      >
                        ${item.price} x {item.quantity}
                      </p>
                      <div
                        className="inc-dec-btn"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button
                          style={{
                            backgroundColor: "#ddd",
                            padding: "5px 10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: "10px",
                          }}
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          style={{
                            backgroundColor: "#ddd",
                            padding: "5px 10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginLeft: "10px",
                          }}
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <hr style={{ margin: "20px 0", border: "0.5px solid #ddd" }} />
              <div
                style={{
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>

          <div
            className="order-form-container"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(211, 211, 211, 0.6)",
              padding: "20px",
              background: "#f3f3f3",
            }}
          >
            <OrderForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;