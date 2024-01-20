/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { ToursContext } from "./App";
import { useContext, useState } from "react";
export default function Login() {
  const { setLog } = useContext(ToursContext);
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const check = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      logIn(e);
    }
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  const logIn = async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
      email: email,
      password: password,
    };

    const res = await fetch("http://127.0.0.1:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    }).then((response) => {
      return response.json();
    });
    if (res.status === "success") {
      setLog(true);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.User));
      setPopupMessage("Success!!");
      setPopupVisible(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else if (res.status === "fail") {
      setPopupMessage(res.message);
      setPopupVisible(true);
    }
  };
  return (
    <>
      {popupVisible && (
        <div id="popup" className="popup">
          <button className="btn popup-close" onClick={closePopup}>
            &#215;
          </button>
          <div className="popup__content">
            <span>{popupMessage}</span>
          </div>
        </div>
      )}
      <section className="log-section">
        <div className="log">
          <div className="log-heading-tertiary">
            <h2>Log into your account</h2>
          </div>
          <div className="book__log">
            <form action="#" className="form login">
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  placeholder="●●●●●●●●●"
                  id="password"
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>

              <div className="form__group">
                <button
                  type="submit"
                  className="btn btn--blue cent"
                  onKeyDown={check}
                  onClick={logIn}>
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
