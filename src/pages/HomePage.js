import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import SupportArea from "../components/SupportArea";
import SliderComponent from "../components/Slider";
import ProductList from "../components/ProductList";
import useDelayedLoading from "../hooks/useDelayLoading";
const HomePage = () => {
  const loading = useDelayedLoading(500); // Adjust the delay as needed

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="app">
      <SliderComponent />

      <SupportArea />

      <ProductList />

      <Footer />
    </div>
  );
};

export default HomePage;
