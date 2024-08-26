/* eslint-disable no-unused-vars */
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInfoUser } from "./IsLogged";

export const API_BASE_URL = "http://localhost:3001";

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
  return user;
};

// gère les reposer de la demande de connexion
export const handleLoginResponse = async (user, navigate) => {

  //log du resultat de le requete
  console.log("User data:", user);

  if (!user.body || !user.body.token) {
    console.error("Token is undefined in the API response");
    return;
  }
  // Stocker le token dans le localStorage
  await localStorage.setItem('token', user.body.token);
  console.log("Token:", localStorage.getItem('token'));

  //recuperation du token 
  const token = localStorage.getItem('token');

    // Fetch pour récupérer les informations de l'utilisateur
    try {
      await getInfoUser(token);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }

  // Rediriger vers la page des utilisateurs
  navigate('/users');
};

// fonction de bases
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // etat du message d erreure
  const [showError, setShowError] = useState(false);
  const [incorrectField, setIncorrectField] = useState(false);

  // pour la redirection ver la page de connexion
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

        //supression message erreur
        setShowError(false);
      } catch (error) {
        //message d erreur champs incorect
        setIncorrectField(true)
        setShowError(false);
        console.error("Error:", error);
      }
    } else {
      // ajout message d'erreur visible pour l'utilisateur
      setShowError(true);

      //message dans la console 
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

      {incorrectField && (
        <p className="error-message">Incorrect Fields.</p>
      )}

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
