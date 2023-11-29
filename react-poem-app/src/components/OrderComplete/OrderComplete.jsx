// import "../../../public/styles/complete.css";

export default function OrderComplete() {
  return (
    <>
      <div class="make_your_own_wrapper">
        <div class="header">
          <h1 class="heading">Order your own</h1>
        </div>
      </div>

      <div class="container">
        <div class="complete_wrapper">
          <img src="/assets/check.png" alt="" class="complete_icon" />

          <h1 class="complete_header">Your Order Is Completed!</h1>

          <p class="complete_order_info">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>

          <button class="button continue_shopping">Continue Browsing</button>

          <img src="/assets/clock.svg" alt="" class="absolute_icon" />

          <img src="/assets/check_list.svg" alt="" class="absolute_icon" />
        </div>
      </div>
    </>
  );
}
