import useForm from "../../hooks/useForm";

export default function Register({ registerSubmitHandler }) {
  const REGISTER_FORM_KEYS = {
    Email: "email",
    Password: "password",
    RepeatPassword: "repeatPassword",
  };
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [REGISTER_FORM_KEYS.Email]: "",
    [REGISTER_FORM_KEYS.Password]: "",
    [REGISTER_FORM_KEYS.RepeatPassword]: "",
  });
  return (
    <div className="register_page">
      <div className="register_wrapper">
        <div className="heading">Register</div>
        <div className="error_register">{}</div>
        <form className="ng_form" onSubmit={onSubmit}>
          <input
            className="input_field"
            type="email"
            placeholder="Email address"
            name={REGISTER_FORM_KEYS.Email}
            value={values.email}
            onChange={onChange}
          />

          <div className="error_register">Email is required!</div>
          <div className="error_register">Email is invalid!</div>

          <input
            className="input_field"
            type="password"
            placeholder="Password"
            name={REGISTER_FORM_KEYS.Password}
            value={values.password}
            onChange={onChange}
          />

          <div className="error_register">Password is required!</div>
          <div className="error_register">Password must be 5 characters!</div>

          <input
            className="input_field"
            type="password"
            placeholder="Repeat Password"
            name={REGISTER_FORM_KEYS.RepeatPassword}
            value={values.repeatPassword}
            onChange={onChange}
          />
          <div className="error_register"></div>
          <div className="error_register">Passwords missmatch!</div>

          <button className="sign_in_button" type="submit">
            Register
          </button>

          <div className="log_in_link">
            If you already have an account?
            <a className="sign_in">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}
