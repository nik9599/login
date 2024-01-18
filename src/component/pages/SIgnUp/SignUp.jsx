import React, { useEffect, useState } from "react";
import "./signup.css";
import { signUpUser, getUserIp } from "../../ApiCalling/fetchApi";
import { passwordStrength } from "../../common/utils";
const signUpLayout = {
  phone: "",
  email: "",
  password: "",
  device_id: "",
};

export default function SignUp({ setError }) {
  const [signup, setSignUp] = useState(signUpLayout);
  // const [error, setError] = useState(null);
  const [accepted, setAceepted] = useState(false);

  useEffect(() => {
    const getUserIP = async () => {
      const res = await getUserIp();
      if (res) {
        setSignUp({ ...signup, device_id: res });
      }
    };

    getUserIP();
  }, []);

  const handleInput = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const signUp = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const r = passwordStrength(signup.password);
    if (r && accepted) {
      try {
        const res = await signUpUser(signup);
        // Handle success, e.g., redirect to another page or show a success message
        console.log("User signed up successfully:", res);
        window.alert(res.message)
      } catch (error) {
        // Handle error
        console.error("Error signing up:", error.message);
        // setError("Error signing up. Please try again."); // Set an error message
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="P">
      <div className="P1">
        <div className="C">
          <div className="C1">
            <div className="H1">
              <h2>Start your Setapp membership</h2>
            </div>
            <div className="IC">
              <div className="IC1">
                <i class="fa-brands fa-google fa-xl "></i>
              </div>
              <div className="IC2">
                <i class="fa-brands fa-apple fa-2xl"></i>
              </div>
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
                placeholder="Email"
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

              <div className="CheckBox">
                <input type="checkbox" onClick={() => setAceepted(!accepted)} />
                <p>
                  Accept <a>Terms of Services</a> ,<a> Privacy Policy</a> and{" "}
                  <a> Cookie Policy</a>
                </p>
              </div>

              <button type="submit">Continue</button>
            </form>
            {/* {error && <p className="error-message">{error}</p>} */}
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
