import React, { useState, useRef } from "react";
import "./confirmCode.css";
import img from "../../assets/illustration.png";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { API } from "../../axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ConfirmCode() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);
    if (e.target.value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = async () => {
    try {
      const otpCode = otp.join("");
      const code = otpCode;
      const response = await axios.post(`${API}/email-confirm/`, { code });
      console.log(response);

      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="back_button">
        <Link to="/sign-up" className="button_back">
          <LeftCircleOutlined className="button_icon" />
          <span>Back</span>
        </Link>
      </div>
      <div className="confirmation">
        <div className="confirmation_left_side">
          <img src={img} className="auth_img" alt="Lorby main image" />
          <h2 className="confirm_text">Lorby</h2>
          <p>Your personal tutor</p>
        </div>

        <div className="confirmation_right_side">
          <p className="auth_text">
            By entering the 4-digit code sent to the mail
          </p>

          <div className="otp_area">
            {otp.map((data, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, i)}
                ref={(el) => (inputRefs.current[i] = el)}
              />
            ))}
          </div>
          <button type="submit" className="submit" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCode;
