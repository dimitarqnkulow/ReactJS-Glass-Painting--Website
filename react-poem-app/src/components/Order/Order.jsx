export default function Order() {
  return (
    <div className="form_wrapper">
      <form className="form">
        <h2 className="form_heading">
          Describe your emotions on glass and we will paint it for you!
        </h2>
        <div className="name_wrapper">
          <input className="form_input" placeholder="Your Name*" type="text" />

          {/* <div className="error_register">Your name is required!</div>
          <div className="error_register">Your name must be alphanumeric!</div> */}

          <input
            className="form_input"
            placeholder="Your Surename"
            type="text"
          />
        </div>
        <input
          className="form_input"
          placeholder="Phone*"
          type="tel"
          name="phone"
        />

        {/* <div className="error_register">Phone number is required!</div>
        <div className="error_register">
          Please enter 10 digit valid phone number!
        </div> */}

        <textarea
          name="descritpion"
          className="form_input text_area"
          placeholder="Type Your Messege*"
          type="text"
        ></textarea>

        {/* <div className="error_register">Description is required!</div>
        <div className="error_register">
          Description must be at least 15 characters!
        </div> */}

        <button className="button button_order">Order</button>
      </form>
    </div>
  );
}
