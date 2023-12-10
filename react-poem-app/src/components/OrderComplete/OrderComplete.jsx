// import "../../../public/styles/complete.css";
import { Link } from "react-router-dom";
import Path from "../../utils/paths";

export default function OrderComplete() {
  return (
    <>
      <div className="make_your_own_wrapper">
        <div className="header">
          <h1 className="heading">Order your own</h1>
        </div>
      </div>

      <div className="container">
        <div className="complete_wrapper">
          <img src="/assets/check.png" alt="" className="complete_icon" />

          <h1 className="complete_header">Your Order Is Completed!</h1>

          <p className="complete_order_info">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>

          <Link className="link" to={Path.Home}>
            <button className="button continue_shopping">
              Continue Browsing
            </button>
          </Link>

          <img src="/assets/clock.svg" alt="" className="absolute_icon" />

          <img src="/assets/check_list.svg" alt="" className="absolute_icon" />
        </div>
      </div>
    </>
  );
}
