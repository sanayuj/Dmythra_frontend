import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../Features/setUser";
import { userHeader } from "../../../Services/userApi";
function Header() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    dispatch(setUserDetails(""));
    navigate("/login");
  };
  useEffect(() => {
    userHeader().then((response) => {
      dispatch(setUserDetails(response.data.userDetails));
    });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary ">
        <div className="container-fluid">
          <Link to={"/"} className="linkDecoration">
            <b>DMYTHRA</b>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/announcement"
                >
                  Announcements
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/training">
                  Training
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/academic">
                  Academic
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/donation">
                  Request Donation
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/post">
                  Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {user ? (
          <div className="logoutBtn" onClick={handleLogout}>
            <Link className="linkDecoration text-white">LogOut</Link>
          </div>
        ) : (
          <div className="logIn">
            <Link className="linkDecoration text-white" to={"/login"}>
              Login/Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
