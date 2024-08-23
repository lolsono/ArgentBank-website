/* eslint-disable no-unused-vars */
// App.js
import React from "react";
import { useLocation } from "react-router-dom";
import Routing from "./Routes/Routes.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  const isSpecialPage = ["/signIn", "/users"].includes(location.pathname);

  return (
    <>
      <Navbar />
      <main className={isSpecialPage ? "main-signIn" : ""}>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
