import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import Header from "./components/Header";
import AddProduct from "./components/add-product";

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      {/* <NewHeader /> */}
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/cartPage">
            <CartPage />
          </Route>
          <Route path="/checkoutPage">
            <CheckOutPage />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
        </Switch>
      </div>
      <ToastContainer
        position="top-right" // Adjust position
        autoClose={1000} // Duration in milliseconds
        hideProgressBar
        newestOnTop
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={({ type }) => `toastify-toast toastify-toast-${type}`}
      />
    </Router>
  );
};

export default App;
