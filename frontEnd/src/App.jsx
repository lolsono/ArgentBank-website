import Routing from "./Routes/Routes.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
