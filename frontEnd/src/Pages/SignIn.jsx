/* eslint-disable no-unused-vars */
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      console.log("Form data:", formData);
      // Réinitialiser l'erreur si le formulaire est valide
      setShowError(false);
    } else {
      // Afficher l'erreur si le formulaire est invalide
      setShowError(true);
      console.log("Please complete all fields.");
    }
  };

  return (
    <div className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>

      {showError && (
        <p className="error-message">Please complete all fields.</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
