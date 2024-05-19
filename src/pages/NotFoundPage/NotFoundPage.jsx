import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.error}>Opps! Page not found! Sorry!</p>
      <p className={css.message}>
        Please visit
        <Link to="/">home page</Link>
      </p>
    </div>
  );
}
