import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const userNameId = useId();
  const userEmailId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Successful !!!");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again");
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label} htmlFor={userNameId}>
            Email
            <Field
              className={css.field}
              id={userNameId}
              type="email"
              name="email"
            />
          </label>
          <label className={css.label} htmlFor={userEmailId}>
            Password
            <Field
              className={css.field}
              id={userEmailId}
              type="password"
              name="password"
            />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
