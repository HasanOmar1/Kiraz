import { FormEvent, useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.jpg";
import { useLoginContext } from "../../context/LoginContext";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useLoginContext();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginUser({
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

      <>
        <form onSubmit={handleOnSubmit}>
          <div className="input-container">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      </>
    </div>
  );
};

export default LoginModal;
