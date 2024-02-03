import React from "react";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import lordImg from "./assets/illustration.png";
import { basicSchema } from "./schemas";


function Registration() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik);
  console.log(formik.errors);

  return (
    <>
      <div className="auth__container">
        <div className="auth_left_side">
          <img src={lordImg} className="auth_img" alt="Lorby main image" />
          <h2 className="auth_text">Lorby</h2>
          <p>Your personal tutor</p>
        </div>
        <div className="auth_right_side">
          <h1>Welcome Back!</h1>
          <input
            id="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          <br />
          <input
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          <br />
          <button type="submit">Log in</button>
        </div>
      </div>
    </>
  );
}

export default Registration;
