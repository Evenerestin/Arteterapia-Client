// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiddenIcon, ShownIcon } from "../assets/VisibilityIcons";
import { TOKEN } from "../config";
import "../css/LogIn.css";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState(null);
  const navigateTo = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setLoginData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const mockBackendLogin = async (login, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (login === "admin" && password === "stix") {
          resolve({
            status: 200,
            message: "Login successful",
            data: { token: TOKEN },
          });
        } else {
          reject({ status: 401, message: "Invalid login or password" });
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      const { login, password } = loginData;

      const response = await mockBackendLogin(login, password);
      // const response = await axios.post('http://localhost:8080/login', { login, password });

      const token = response.data.token;
      localStorage.setItem("token", token);

      navigateTo("/panel");
    } catch (err) {
      setError(err.message);
      console.error("Login failed:", err);
    }
  };

  return (
    <div id="logIn" className="gridCenter">
      <div className="container">
        <h1>Dzień dobry :)</h1>
        <form onSubmit={handleSubmit} className="flexColumn">
          <div className="inputGroup">
            <div className="inputContainer flex">
              <label>
                Login:
              </label>
              <input
                type="text"
                name="login"
                value={loginData.login}
                onChange={handleInput}
                required
              />
            </div>
            <div className="inputContainer flex">
              <label>
                Hasło:
              </label>
              <input
                type={loginData.showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleInput}
                required
              />
              <button
                type="button"
                className="passwordToggle"
                onClick={togglePasswordVisibility}
              >
                {loginData.showPassword ? <ShownIcon /> : <HiddenIcon />}
              </button>
            </div>
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
