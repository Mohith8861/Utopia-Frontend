/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ToursContext } from "../App";
import Search from "./Search";

export default function Header() {
  const { setLog, loggedIn, user } = useContext(ToursContext);

  return (
    <header className="header2">
      <nav className="nav nav--tours">
        <a href="/" className="nav__el">
          Home
        </a>
        <Search />
      </nav>
      <div className="header2__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1680.097 1680.097"
          enableBackground="new 0 0 1680.097 1680.097">
          <path
            fill="rgb(255, 255, 255,0.1)"
            stroke="#FFFFFF"
            strokeWidth="15"
            strokeMiterlimit="10"
            d="M847.03,40.048 c-660.693,934.072,584.451,1109.066,206.817,29.066c-879.936,731.244,277.489,1222.542,192.247,81.604 C206.882,629.302,1197.711,1403.423,1410.671,279.3c-1127.669,193.308-370.958,1197.497,125.689,166.795 c-1139.277-105.141-668.253,1060.682,78.237,193.642c-1073.244-396.425-920.008,851.584,25.452,207.293 c-934.072-660.693-1109.066,584.451-29.066,206.817c-731.244-879.936-1222.542,277.489-81.604,192.247 c-478.584-1039.213-1252.705-48.383-128.581,164.576C1207.489,283.001,203.3,1039.712,1234.002,1536.359 c105.141-1139.277-1060.682-668.253-193.642,78.237c396.425-1073.244-851.584-920.008-207.293,25.452 c660.693-934.072-584.451-1109.066-206.817-29.066c879.936-731.244-277.489-1222.542-192.247-81.604 c1039.213-478.584,48.383-1252.705-164.576-128.581C1397.096,1207.489,640.385,203.3,143.737,1234.002 C1283.014,1339.143,811.991,173.32,65.501,1040.36c1073.244,396.425,920.008-851.584-25.452-207.293 C974.12,1493.76,1149.114,248.616,69.115,626.25c731.244,879.936,1222.542-277.489,81.604-192.247 C629.302,1473.215,1403.423,482.386,279.3,269.426c193.308,1127.669,1197.497,370.958,166.795-125.689 C340.954,1283.014,1506.777,811.991,639.737,65.501C243.312,1138.745,1491.321,985.509,847.03,40.048z"
          />
        </svg>
      </div>
      <nav className="nav nav--user">
        <a href="#" className="nav__el">
          My bookings
        </a>
        {loggedIn ? (
          <>
            <a href="#" className="nav__el">
              <img
                src="img/user.jpg"
                alt="User photo"
                className="nav__user-img"
              />
              <span>{user.current["name"]}</span>
            </a>
            <button
              className="nav__el nav__el--cta"
              onClick={() => {
                setLog(false);

                localStorage.removeItem("token");
                window.location = "/";
              }}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav__el">
              Log in
            </Link>

            <Link to="/signup" className="nav__el nav__el--cta">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
