import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPages404 from "../Pages/Error404Page.jsx";
import Home from "../Pages/Home.jsx";
import Islogged from "../Pages/IsLogged.jsx";
import SignIn from "../Pages/SignIn.jsx";
function Routing() {
    const token = localStorage.getItem('token');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/*" element={<ErrorPages404 />} />
        <Route path="*" element={<ErrorPages404 />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/users"
          element={token ? <Islogged /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default Routing;
