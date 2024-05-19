import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <nav className={css.wrapper}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={getNavLinkClass}>
          Contacts
        </NavLink>
      </nav>
      <nav className={css.wrapperUser}>
        <NavLink to="/register" className={getNavLinkClass}>
          Registration
        </NavLink>
        <NavLink to="/login" className={getNavLinkClass}>
          LogIn
        </NavLink>
      </nav>
    </div>
  );
}
