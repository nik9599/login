

export  const passwordStrength = (password) => {
 console.log("call")
    console.log(`this is pasword ${password}`)

  // At least 8 characters
  const lengthRegex = /.{8,}/;

  // At least one lowercase letter
  const lowercaseRegex = /[a-z]/;

  // At least one uppercase letter
  const uppercaseRegex = /[A-Z]/;

  // At least one digit
  const digitRegex = /\d/;

  // At least one special character (symbol)
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Combine all criteria
  const isStrong =
    lengthRegex.test(password) &&
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password);

  return isStrong;
  };