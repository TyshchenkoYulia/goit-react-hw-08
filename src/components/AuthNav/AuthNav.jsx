import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <nav className={css.wrapperUser}>
      <NavLink to="/register" className={getNavLinkClass}>
        Registration
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        LogIn
      </NavLink>
    </nav>
  );
}
