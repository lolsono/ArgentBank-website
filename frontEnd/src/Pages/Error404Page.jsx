import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="error-container">
      <h2>404</h2>
      <p>Oups! La page que vous demandez existe pas.</p>
      <Link className="link-acceuil" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
