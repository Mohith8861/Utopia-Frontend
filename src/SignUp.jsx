import { useNavigate } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { ToursContext } from "./App";

export default function SignUp() {
  const { setLog } = useContext(ToursContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const check = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      signUp(e);
    }
  };

  const signUp = async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const user = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const res = await fetch("http://127.0.0.1:3000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .catch(() => {});

    if (res.status === "success") {
      setLog(true);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.User));
      setPopupMessage("Success!!");
      setPopupVisible(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else if (res.status === "fail" || res.status === "error") {
      setPopupMessage(res.message);
      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (popupVisible) {
      //  additional actions when the popup is visible
    }
  }, [popupVisible]);

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
      <section className="log-section signup">
        <div className="log">
          <div className="log-heading-tertiary">
            <h2>Sign up</h2>
          </div>
          <div className="book__log">
            <form action="#" className="form login">
              <div className="form__group">
                <input
                  type="name"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>

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
                  placeholder="Password"
                  id="password"
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  required
                />
                <label htmlFor="confirmPassword" className="form__label">
                  Confirm Password
                </label>
              </div>

              <div className="form__group">
                <button
                  type="submit"
                  className="btn btn--blue cent"
                  onClick={signUp}
                  onKeyDown={check}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
