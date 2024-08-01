import { Route, Routes } from "react-router-dom";
import ErrorPages404 from "../Pages/Error404Page.jsx";
import Home from "../Pages/Home.jsx";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/*" element={<ErrorPages404 />} />
        <Route path="*" element={<ErrorPages404 />} />
      </Routes>
    </>
  );
}

export default Routing;
