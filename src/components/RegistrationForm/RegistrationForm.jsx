import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function RegistrationForm() {
  const userNameId = useId();
  const userEmailId = useId();
  const userPasswordId = useId();

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successful !!!");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again");
        // return <p>Error</p>;
      });
  };

  // const handleSubmit = (values, actions) => {
  //   dispatch(register(values));
  //   if (!isLoggedIn) {
  //     return <p>Oops, something went wrong!!! Try again</p>;
  //   }
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor={userNameId}>
          Username
          <Field
            className={css.field}
            id={userNameId}
            type="text"
            name="name"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label} htmlFor={userEmailId}>
          Email
          <Field
            className={css.field}
            id={userEmailId}
            type="email"
            name="email"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label} htmlFor={userPasswordId}>
          Password
          <Field
            className={css.field}
            id={userPasswordId}
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
