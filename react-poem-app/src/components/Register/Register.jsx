import { useAuth } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import Path from "../../utils/paths";
import { useState } from "react";

const REGISTER_FORM_KEYS = {
  Email: "email",
  Password: "password",
  RepeatPassword: "repeatPassword",
};

export default function Register() {
  const { registerSubmitHandler, err } = useAuth();
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [REGISTER_FORM_KEYS.Email]: "",
    [REGISTER_FORM_KEYS.Password]: "",
    [REGISTER_FORM_KEYS.RepeatPassword]: "",
  });

  return (
    <div className="register_page">
      <div className="register_wrapper">
        <div className="heading">Register</div>
        {err && <div className="error_register">{err}</div>}
        <form className="ng_form" onSubmit={onSubmit}>
          <input
            className="input_field"
            type="email"
            placeholder="Email address"
            name={REGISTER_FORM_KEYS.Email}
            value={values.email}
            onChange={onChange}
            required
          />

          {/* {errors && <div className="error_register">{errors.email}</div>} */}
          {/* <div className="error_register">Email is required!</div> */}

          <input
            className="input_field"
            type="password"
            placeholder="Password"
            name={REGISTER_FORM_KEYS.Password}
            value={values.password}
            onChange={onChange}
            required
          />
          {/* 
          <div className="error_register">Password is required!</div>
          <div className="error_register">Password must be 5 characters!</div> */}

          <input
            className="input_field"
            type="password"
            placeholder="Repeat Password"
            name={REGISTER_FORM_KEYS.RepeatPassword}
            value={values.repeatPassword}
            onChange={onChange}
            required
          />
          <div className="error_register"></div>
          {/* <div className="error_register">Passwords missmatch!</div> */}

          <button className="sign_in_button" type="submit">
            Register
          </button>

          <div className="log_in_link">
            If you already have an account?
            <Link className="sign_in" to={Path.Login}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
