import React, { useState } from "react";
import "./signup.css";
import { signUpUser } from "../../ApiCalling/fetchApi";

const signUpLayout = {
  phone: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [signup, setSignUp] = useState(signUpLayout);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const signUp = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      const res = await signUpUser(signup);
      // Handle success, e.g., redirect to another page or show a success message
      console.log("User signed up successfully:", res);
    } catch (error) {
      // Handle error
      console.error("Error signing up:", error.message);
      setError("Error signing up. Please try again."); // Set an error message
    }
  };

  return (
    <div className="P">
      <div className="P1">
        <div className="C" >
          <div className="C1">
            <div className="H1">
              <h2>Start your Setapp membership</h2>
            </div>
            <div className="IC">
            <div className="IC1" >{/* icon */}</div>
              <div className="IC2" >{/* icon */}</div>
            </div>
          </div>
          <div className="C2">
            <p>or sign up with email</p>
          </div>
          <div className="C3">
            <form onSubmit={signUp}>
              <input
                type="text"
                name="email"
                placeholder="Name"
                onChange={(e) => handleInput(e)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e) => handleInput(e)}
              />

              <input
                type="password"
                name="password"
                placeholder="Create Password"
                onChange={(e) => handleInput(e)}
              />

              <div>
                <input type="checkbox" />
                <p>
                  Accept Terms of Services , PrivacyPolicy and Cookie Policy
                </p>
              </div>

              <button type="submit">Continue</button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="C4">
            <p>
              Got an account?<a>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
