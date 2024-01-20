/* eslint-disable no-unused-vars */
import { useState, useRef, createContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import TourList from "./TourList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tour from "./components/Tour";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import Error from "./Error";

const ToursContext = createContext();

function App() {
  const [loggedIn, setLog] = useState(localStorage.getItem("token") !== null);
  const user = useRef({ name: "user" });

  if (loggedIn) {
    user.current = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <ToursContext.Provider value={{ loggedIn, setLog, user }}>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />

        <Route path="tours/:q" element={loggedIn ? <TourList /> : <Login />} />
        <Route path="tour/:slug" element={loggedIn ? <Tour /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </ToursContext.Provider>
  );
}
export { ToursContext };
export default App;
