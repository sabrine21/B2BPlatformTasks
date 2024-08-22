export const validate = (data) => {
  const errors = {};

  if (!data.email.trim()) {  
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(data.email).toLowerCase())) {
    errors.email = "Email address is invalid!";
  }

  if (data.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }


  if (data.confirm_password !== data.password) {
      errors.confirm_password = "Password does not match!";
    }
 
  if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone Number is invalid!";
  }

  return errors;
};
