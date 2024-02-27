import css from "./NavBar.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <nav className={css.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        <div className={css.loginSection}>
          {" "}
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log In
          </NavLink>
        </div>
      </nav>
    </>
  );
};
