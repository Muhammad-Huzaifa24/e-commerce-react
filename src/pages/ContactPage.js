import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Show success toast notification
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      icon: "✔️", // Tick icon
      className: "toast-success",
      closeButton: () => (
        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          &times;
        </button>
      ),
      onClose: () => {
        history.push("/");
      },
    });
  };
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h2 className="heading">Contact us</h2>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required style={{}} />
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        {/* City */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" required />
        </div>
        {/* Country */}
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" required />
        </div>
        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" required rows="4" />
        </div>
        <div className="form-group"></div>
        {/* submit button */}
        <div className="contact-form-btn-container">
          <button
            onClick={handleSubmit}
            type="submit"
            className="contact-form-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
