import { useState } from "react";
import OrderValidation from "./OrderValidations";
import * as orderServices from "../../services/orderServices";
import { useNavigate } from "react-router-dom";
import Path from "../../utils/paths";

export default function Order() {
  const [values, setValues] = useState({
    firstName: "",
    surName: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  function handleValue(e) {
    e.preventDefault();
    const newObject = { ...values, [e.target.name]: e.target.value };
    setValues(newObject);
    setErrors(OrderValidation(values));
  }

  async function orderSubmitHandler(e) {
    e.preventDefault();
    if (errors.length) {
      return setInvalid("Invalid order!");
    }
    try {
      orderServices.createOrder(values);
      navigate(Path.Complete);
    } catch (err) {
      navigate(Path.Order);
      return;
    }
  }

  return (
    <div className="form_wrapper">
      <form className="form" onSubmit={orderSubmitHandler}>
        <h2 className="form_heading">
          Describe your emotions on glass and we will paint it for you!
        </h2>
        {invalid && <div className="error_register">{invalid}</div>}
        <div className="name_wrapper">
          <input
            className="form_input"
            placeholder="Your Name*"
            type="text"
            name="firstName"
            onChange={handleValue}
            required
          />

          {errors.firstName && (
            <div className="error_register">{errors.firstName}</div>
          )}

          <input
            className="form_input"
            placeholder="Your Surename"
            type="text"
            name="surName"
            onChange={handleValue}
          />
        </div>
        <input
          className="form_input"
          placeholder="Phone*"
          type="tel"
          name="phone"
          onChange={handleValue}
          required
        />

        {errors.phone && <div className="error_register">{errors.phone}</div>}

        <textarea
          name="description"
          className="form_input text_area"
          placeholder="Type Your Messege*"
          type="text"
          onChange={handleValue}
          required
        ></textarea>

        {errors.description && (
          <div className="error_register">{errors.description}</div>
        )}

        <button className="button button_order">Order</button>
      </form>
    </div>
  );
}
