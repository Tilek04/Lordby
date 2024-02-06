import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import lordImg from "../assets/illustration.png";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
import "./registration.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { LeftCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { API } from "../axios";

function Registration() {
  const [visible, setVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik);
  console.log(formik.errors);

  const handleRegister = async () => {
    try {
      const response = await axios
        .post(`${API}/register/`, {
          email: formik.values.email,
          username: formik.values.username,
          password: formik.values.password,
          password_confirm: formik.values.confirmpassword,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            navigate("/sign-up/confirmation");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="register__container">
        <div className="back_button">
          <Link to="/" className="button_back">
            <LeftCircleOutlined className="button_icon" />
            <span>Back</span>
          </Link>
        </div>
        <div className="auth_left_side">
          <img src={lordImg} className="auth_img" alt="Lorby main image" />
          <h2 className="auth_text">Lorby</h2>
          <p>Your personal tutor</p>
        </div>
        <div className="auth_right_side">
          <h1>New account!</h1>

          <input
            id="email"
            type="email"
            className={formik.errors.email ? "input-error" : ""}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
          <input
            id="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            className={formik.errors.username ? "input-error" : ""}
            placeholder="Enter your name"
          />
          {formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}
          <input
            id="password"
            type={visible ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            maxLength={20}
            className={formik.errors.password ? "input-error" : ""}
            placeholder="Enter your password"
          />

          <div className="icon_eye" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>

          <p
            className={`${
              formik.values.password.length >= 8 ? "valid" : "invalid"
            } ${formik.values.password ? "" : "gray"}`}>
            Minimum of 8 characters
          </p>
          <p
            className={` ${
              formik.values.password.length &&
              hasSpecialCharacter.test(formik.values.password)
                ? "valid"
                : "invalid"
            } ${formik.values.password ? "" : "gray"}
            `}>
            Minimum of 1 symbol ()!, ', #, $ ..."
          </p>
          <p
            className={`   ${
              formik.values.password.length && /\d/.test(formik.values.password)
                ? "valid"
                : "invalid"
            } ${formik.values.password ? "" : "gray"}`}>
            At least one digit
          </p>

          <input
            id="confirmpassword"
            type={confirmPassword ? "text" : "password"}
            value={formik.values.confirmpassword}
            className={formik.errors.confirmpassword ? "input-error" : ""}
            placeholder="Confirm your password"
            maxLength={15}
            onChange={formik.handleChange}
          />
          <div
            className="icon_eye"
            onClick={() => setConfirmPassword(!confirmPassword)}>
            {confirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
          {formik.errors.confirmpassword && (
            <p className="error">{formik.errors.confirmpassword}</p>
          )}

          <button
            className="next_button"
            type="submit"
            onClick={handleRegister}
            disabled={!formik.isValid || formik.isSubmitting}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;