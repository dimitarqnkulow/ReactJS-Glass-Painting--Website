import useForm from "../../hooks/useForm";

export default function Login() {
  const { values, onChange, onSubmit } = useForm({
    email: "",
    password: "",
  });
  return (
    <div className="register_page">
      <div className="register_wrapper">
        <div className="heading">Login</div>

        <div className="error_register">{}</div>

        <form className="ng_form" onSubmit={onSubmit}>
          <input
            className="input_field"
            type="email"
            placeholder="Email address"
            name="email"
            onChange={onChange}
            value={values.email}
          />

          <div className="error_register">Email is required!</div>
          <div className="error_register">Email is invalid!</div>

          <input
            className="input_field"
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            value={values.password}
          />

          <div className="error_register">Password is required!</div>

          <button className="sign_in_button" type="submit">
            Log in
          </button>

          <div className="log_in_link">
            If you don't have an account?
            <a className="sign_in">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
