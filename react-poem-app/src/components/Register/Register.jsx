export default function Register() {
  return (
    <div className="register_page">
      <div className="register_wrapper">
        <div className="heading">Register</div>
        <div className="error_register">{}</div>
        <form className="ng_form">
          <input
            className="input_field"
            type="email"
            placeholder="Email address"
            name="email"
          />

          <div className="error_register">Email is required!</div>
          <div className="error_register">Email is invalid!</div>

          <input
            className="input_field"
            type="password"
            placeholder="Password"
            name="password"
          />

          <div className="error_register">Password is required!</div>
          <div className="error_register">Password must be 5 characters!</div>

          <input
            className="input_field"
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
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
