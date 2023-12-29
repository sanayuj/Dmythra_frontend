import React, { useEffect, useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userSignup, login } from "../../../Services/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../../Features/setUser";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const initialValuesOfSignup = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialValuesOfLogin = {
    emailId: "",
    loginPassword: "",
  };

  const signOnSubmit = async (values, { resetForm }) => {
    const { data } = await userSignup(values);
    if (data.status) {
      toast.success(data.message);
      resetForm({
        values: initialValuesOfSignup,
      });
      navigate("/login");
    } else {
      toast.error(data.message);
    }
  };

  const loginOnSubmit = async (values) => {
    const { data } = await login(values);
    if (data.success) {
      localStorage.setItem("jwt", data.token);
      toast.success(data.message);
      dispatch(setUserDetails(data.userDetails));
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  const validationSchemaOfLogin = Yup.object({
    emailId: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    loginPassword: Yup.string().required("* This field is required"),
  });

  const validationSchemaOfSignup = Yup.object({
    username: Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value) => !/\s/.test(value)
      )
      .min(3, "*Name must be at least 3 characters long")
      .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string()
      .required("* This field is required")
      .min(6, "* Password must be at least 6 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
        "* Password must contain at least one capital letter\nand one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("* This field is required"),
  });
  const formikLogin = useFormik({
    initialValues: initialValuesOfLogin,
    onSubmit: loginOnSubmit, // Use the loginOnSubmit function for login form
    validationSchema: validationSchemaOfLogin,
  });

  const formikSignup = useFormik({
    initialValues: initialValuesOfSignup,
    onSubmit: signOnSubmit, // Use the signOnSubmit function for signup form
    validationSchema: validationSchemaOfSignup,
  });

  return (
    <>
      <br />
      <br />
      <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
        <div className="form sign-in">
          <h2 className="my-3">
            Welcome to <b>Dmythra</b>
          </h2>
          <div className="loginForm">
            <form onSubmit={formikLogin.handleSubmit}>
              <label>
                <span>Email</span>
                <input
                  className="loginInput"
                  type="email"
                  name="emailId"
                  onBlur={formikLogin.handleBlur}
                  onChange={formikLogin.handleChange}
                  value={formikLogin.values.emailId}
                />
                {formikLogin.touched.emailId && formikLogin.errors.emailId ? (
                  <p
                    className="text-danger"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formikLogin.errors.emailId}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Password</span>
                <input
                  className="loginInput"
                  type="password"
                  name="loginPassword"
                  onBlur={formikLogin.handleBlur}
                  onChange={formikLogin.handleChange}
                  value={formikLogin.values.loginPassword}
                />
                {formikLogin.touched.loginPassword &&
                formikLogin.errors.loginPassword ? (
                  <p
                    className="text-danger"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formikLogin.errors.loginPassword}
                  </p>
                ) : null}
              </label>
              <button type="submit" className="submit buttonCls">
                Log In
              </button>
            </form>
          </div>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already have an account, just Log in.</h3>
            </div>
            <div className="img__btn" onClick={toggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Log In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <form onSubmit={formikSignup.handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="username"
                  onBlur={formikSignup.handleBlur}
                  onChange={formikSignup.handleChange}
                  value={formikSignup.values.username}
                />
                {formikSignup.touched.username &&
                formikSignup.errors.username ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formikSignup.errors.username}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  onBlur={formikSignup.handleBlur}
                  onChange={formikSignup.handleChange}
                  value={formikSignup.values.email}
                />
                {formikSignup.touched.email && formikSignup.errors.email ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formikSignup.errors.email}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  onBlur={formikSignup.handleBlur}
                  onChange={formikSignup.handleChange}
                  value={formikSignup.values.password}
                />
                {formikSignup.touched.password &&
                formikSignup.errors.password ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formikSignup.errors.password}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Confirm password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  onBlur={formikSignup.handleBlur}
                  onChange={formikSignup.handleChange}
                  value={formikSignup.values.confirmPassword}
                />
                {formikSignup.touched.confirmPassword &&
                formikSignup.errors.confirmPassword ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formikSignup.errors.confirmPassword}
                  </p>
                ) : null}
              </label>
              <button type="submit" className="submit buttonCls">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
