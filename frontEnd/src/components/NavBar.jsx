import { faCircleUser, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from 'react-redux';
import { logout } from '../slices/userSlice'; // Assurez-vous que le chemin est correct

function Navbar() {
  // Vérifie si le token est présent dans le localStorage
  const isLoggedIn = localStorage.getItem('token') !== null;

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //système de déconnexion 
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    // Redirige l'utilisateur vers la page principale
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./designs/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {user ? `${user.firstName}` : '...'}
            </Link>
            <span className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </span>
          </>
        ) : (
          <Link className="main-nav-item" to="/signIn">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
