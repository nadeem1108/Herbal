const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    error.email = "E-mail field is required";
  }

  if (Validator.isEmpty(data.password)) {
    error.password = "Password field is required";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
