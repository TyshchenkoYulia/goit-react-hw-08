import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <PageTitle className={css.error}>Opps! Page not found! Sorry!</PageTitle>
      <p className={css.message}>
        Please visit
        <Link to="/">home page</Link>
      </p>
    </div>
  );
}
