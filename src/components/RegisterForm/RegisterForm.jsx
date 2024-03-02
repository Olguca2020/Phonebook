import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operationAuth";
import css from "./RegisterForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(register(values));
      formik.resetForm();
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={css.error}>{formik.errors.name}</div>
        )}
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={css.error}>{formik.errors.email}</div>
        )}
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={css.error}>{formik.errors.password}</div>
        )}
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
