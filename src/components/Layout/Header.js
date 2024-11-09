import React, { useState } from "react";

import { Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Register from "../../Pages/Auth/Register";
import { useAuth } from "../../context/auth";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location=useLocation();

  // for login handlesubmit
  const LoginHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res_API = await axios.post("https://be-m062.onrender.com/api/v1/auth/login", {
        email,
        password,
      });
      if (res_API && res_API.data.success) {
        toast.success(res_API.data.message);
        console.log("Login successfully");
        setAuth({
          ...auth,
          user: res_API.data.user,
          token: res_API.data.token,
        });
        //save data in localstorage
        localStorage.setItem("auth", JSON.stringify(res_API.data));
        navigate(location.state||"/");
      } else {
        toast.error(res_API.data.message);
        console.log("something wrong in Login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* <img src={bookLogo}></img> */}
          <Link to="/" className="navbar-brand" style={{ color: "blue" }}>
            UrbanNest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  UrbanNest
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to={"/"}>
                    All Categories
                  </Link>
                </ul>
              </li>

              <div> </div>

              <NavLink to="/" className="nav-link mx-1">
                Cart
              </NavLink>

              {/* </li> */}
              {!auth.user? (
                <>
                  {/* <button
                  type="button"
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginModal"
                  >Register
                      </button> */}
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="dropstart">
                    <button
                      className="btn btn-info dropdown-toggle "
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      {auth.user.name}
                    </button>
                    <ul className="dropdown-menu ">
                      <li>
                        <NavLink className="dropdown-item " to={"/"}>
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item link-success">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="nav-link link-success"
                        >
                          LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
