/* eslint-disable no-unused-vars */
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:3001";

// fonction fetch methode post pour la connexion
// fonction fetch methode post pour la connexion
// fonction fetch methode post pour la connexion
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const user = await response.json();
  console.log("API response:", user); // Ajoutez ce log pour vérifier la réponse de l'API
  return user;
};

// gère les reposer de la demande de connexion
export const handleLoginResponse = async (user, navigate) => {
  console.log("User data:", user);
  if (!user.body || !user.body.token) {
    console.error("Token is undefined in the API response");
    return;
  }
  // Stocker le token dans le localStorage
  await localStorage.setItem('token', user.body.token);
  console.log("Token stored in localStorage:", localStorage.getItem('token'));
  // Rediriger vers la page des utilisateurs
  navigate('/users');
};

// fonction de bases
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        const user = await loginUser({ email: formData.email, password: formData.password });
        handleLoginResponse(user, navigate);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Please complete all fields.");
    }
  };

  return (
    <div className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
