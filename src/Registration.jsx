import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import lordImg from "./assets/illustration.png";
import { basicSchema } from "./schemas";
import { Link } from "react-router-dom";
import "./registration.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { LeftCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { API } from "./axios";

function Registration() {
  const [visible, setVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const navigate = useNavigate();

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
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="auth__container">
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
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          <input
            id="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />

          <input
            id="password"
            type={visible ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          <div className="icons" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
          <input
            id="confirmpassword"
            type={confirmPassword ? "text" : "password"}
            value={formik.values.confirmpassword}
            placeholder="Confirm your password"
            onChange={formik.handleChange}
          />
          <div
            className="icons"
            onClick={() => setConfirmPassword(!confirmPassword)}>
            {confirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>

          <button
            className="next_button"
            type="submit"
            onClick={handleRegister}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
