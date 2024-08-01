import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>page home par défaut</p>
      <Link className="link-acceuil" to="*">
        visue page 404
      </Link>
    </div>
  );
}

export default Home;
