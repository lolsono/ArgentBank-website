import Routing from "./Routes/Routes.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routing />
        <Footer />
      </main>
    </>
  );
}

export default App;
