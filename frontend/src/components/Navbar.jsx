import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);

  return (
    <header className="navbar bg-primary d-flex align-items-center border-bottom border-secondary border-4">
      <Link
        to="/"
        className="d-flex align-items-center text-secondadry navbar-logo"
      >
        <img src="./logo-navbar.png" alt="ADA Health logo" width="50" />
        <div className="fw-bold ps-1 text-secondary text-center fs-5 lh-1">
          <p className="m-0">ADA</p>
          <p className="m-0">Health</p>
        </div>
      </Link>
      <ul className="navbar-nav ms-auto">
        {user ? (
          <li className="nav-item me-2">
            <button
              className="btn btn-secondary text-light"
              onClick={() => setUser(!user)}
            >
              <i className="fa-solid fa-right-from-bracket" />
              <span className="d-none d-md-inline ms-1">Cerrar Sesión</span>
            </button>
          </li>
        ) : (
          <div className="d-flex">
            <li className="nav-item me-2">
              <Link
                to="/login"
                className="btn btn-secondary text-light"
                onClick={() => setUser(!user)}
              >
                <i className="fa-solid fa-right-to-bracket" />
                <span className="d-none d-md-inline ms-1">Iniciar Sesión</span>
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                to="/register"
                className="btn btn-secondary text-light"
                onClick={() => setUser(!user)}
              >
                <i className="fa-solid fa-user-plus" />
                <span className="d-none d-md-inline ms-1">Registrarse</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
