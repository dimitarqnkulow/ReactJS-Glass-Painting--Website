export default function OrderValidation(values) {
  const errors = {};

  const nameRegEx = new RegExp(`^[A-Za-z0-9]+$`);
  const phoneRegEx = new RegExp(
    `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
  );
  const descriptionRegEx = new RegExp(`^.{15,300}$`);
  if (values.firstName === "") {
    errors.firstName = "Your name is required!";
  } else if (!nameRegEx.test(values.firstName)) {
    errors.firstName = "Your name must be alphanumeric!";
  }

  if (values.phone === "") {
    errors.phone = "Phone number is required!";
  } else if (!phoneRegEx.test(values.phone)) {
    errors.phone = "Please enter 10 digit valid phone number!";
  }

  if (values.description === "") {
    errors.description = "Description is required!";
  } else if (!descriptionRegEx.test(values.description)) {
    errors.description = "Description must be between 15 and 300 characters!";
  }

  return errors;
}
