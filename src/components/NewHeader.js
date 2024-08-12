import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";

const NewHeader = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const headerStyle = {
    backgroundColor: "#ffffd7",
    padding: "25px 20px",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    // justifyContent: windowWidth > 768 ? "space-between" : "flex-start",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    // flexDirection: windowWidth <= 768 ? "column" : "row",
  };

  const logoStyle = {
    fontSize: "24px",
    textDecoration: "none",
    color: "#000",
    display: windowWidth <= 768 && isMenuOpen ? "none" : "block",
  };

  const menuStyle = {
    display: windowWidth > 768 || isMenuOpen ? "flex" : "none",
    flexDirection: windowWidth > 768 ? "row" : "column",
    alignItems: windowWidth > 768 ? "center" : "flex-start",
    padding: windowWidth <= 768 ? "20px 40px" : "0px",
    width: windowWidth <= 768 ? "100%" : "auto",
    margin: windowWidth <= 768 ? "10px 0" : "0",
    position: windowWidth <= 768 ? "fixed" : "static", // Fixed position for mobile
    top: windowWidth <= 768 ? "0" : "auto", // Align to the top of the viewport for mobile
    left: windowWidth <= 768 ? "0" : "auto", // Align to the left of the viewport for mobile
    height: windowWidth <= 768 ? "100vh" : "auto", // Full height for mobile
    overflowY: windowWidth <= 768 ? "auto" : "visible", // Enable scrolling on mobile
    backgroundColor: windowWidth <= 768 ? "#fff" : "transparent", // Background color for mobile
    boxShadow: windowWidth <= 768 ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none", // Add shadow for mobile
  };

  const menuListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: windowWidth > 768 ? "20px" : "0",
    flexDirection: windowWidth <= 768 ? "column" : "row",
    width: "100%",
    marginTop: windowWidth <= 768 ? "1rem" : "0rem",
  };

  const menuItemStyle = {
    display: "block",
    margin: windowWidth <= 768 ? "5px 0" : "0",
    padding: windowWidth <= 768 ? "10px" : "0px",

    textAlign: windowWidth <= 768 ? "center" : "",
    borderBottom: windowWidth <= 768 ? "1px solid #e5e5e5 " : "none",
  };

  const menuLinkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    fontFamily: "Jost",
  };

  const cartIconStyle = {
    color: "#000",
    textDecoration: "none",
    fontSize: "24px",
    position: "relative",
    marginLeft: windowWidth <= 768 ? "0" : "20px",
    display: windowWidth <= 768 ? "none" : "block", // Hide cart icon on mobile screens
  };

  const cartCountStyle = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  };

  const mobileMenuButtonStyle = {
    cursor: "pointer",
    display: windowWidth <= 768 && !isMenuOpen ? "block" : "none", // Show button only if the menu is closed on mobile
  };

  const closeButtonStyle = {
    display: isMenuOpen && windowWidth <= 768 ? "block" : "none",
    cursor: "pointer",
    alignSelf: "flex-end",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Link to="/" style={logoStyle}>
            MyLogo
          </Link>
        </div>
        <div style={mobileMenuButtonStyle} onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="grey"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <nav style={menuStyle}>
          <div style={closeButtonStyle} onClick={handleMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="grey"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <ul style={menuListStyle}>
            <li style={menuItemStyle}>
              <Link to="/" style={menuLinkStyle} onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li style={menuItemStyle}>
              <Link
                to="#about"
                style={menuLinkStyle}
                onClick={handleMenuToggle}
              >
                About
              </Link>
            </li>
            <li style={menuItemStyle}>
              <Link
                to="#services"
                style={menuLinkStyle}
                onClick={handleMenuToggle}
              >
                Services
              </Link>
            </li>
            <li style={menuItemStyle}>
              <Link
                to="/contact"
                style={menuLinkStyle}
                onClick={handleMenuToggle}
              >
                Contact
              </Link>
            </li>
            <li style={menuItemStyle}>
              <Link
                to="/add-product"
                style={menuLinkStyle}
                onClick={handleMenuToggle}
              >
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
        <div style={cartIconStyle}>
          <Link to="/cartPage" style={cartIconStyle} onClick={handleMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="grey"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            <span style={cartCountStyle}>{cartItemCount}</span>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
