import { FormEvent, useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.jpg";
import { useLoginContext } from "../../context/LoginContext";
import emailSvg from "../../assets/svgs/email-input.svg";
import lockSvg from "../../assets/svgs/lock-input.svg";

const LoginModal = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { loginUser, errorMsg, createUser } = useLoginContext();

  const handleLogIn = (e: FormEvent) => {
    e.preventDefault();
    loginUser({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    createUser({
      name: name,
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <div className="kiraz-logo-container">
        <img src={logo} alt="logo" id="kiraz-logo" />
      </div>
      <hr />
      <div className="title-container">
        <label htmlFor="Email">{isRegister ? "Sign Up" : "Sign In"}</label>
      </div>
      {errorMsg && <p id="error-msg">{errorMsg}</p>}

      <form onSubmit={isRegister ? handleRegister : handleLogIn}>
        {isRegister && (
          <div className="input-container">
            <img src={emailSvg} alt="name svg" />
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input-container">
          <img src={emailSvg} alt="email svg" />
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <img src={lockSvg} alt="lock svg" />
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="login-btn">
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <hr />
      <p id="register">
        {isRegister ? (
          <>
            Already have an account?
            <span
              id="create-account-msg"
              onClick={() => setIsRegister((prev) => !prev)}
            >
              Sign In
            </span>
          </>
        ) : (
          <>
            <>
              Don't have an account?
              <span
                id="create-account-msg"
                onClick={() => setIsRegister((prev) => !prev)}
              >
                Sign Up
              </span>
            </>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginModal;
