import React, { useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userSignup,login } from "../../../Services/userApi";
import { toast } from "react-toastify";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

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
    email: "",
    password: "",
  };

  const signOnSubmit = async(values) => {
    const {data}=await userSignup(values)
    console.log(data);
    if(data.status){
      toast.success(data.message)
    }else{
      toast.error(data.message)
    }
  };

  const loginOnSubmit = async(values) => {
    console.log(values,"LOG IN values")
    const {data}=await login(values)
    console.log(data);
    if(data.status){
      toast.success(data.message)
    }else{
      toast.error(data.message)
    }
  };

  const validationSchemaOfLogin = Yup.object({
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string().required("* This field is required"),
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
  const formik = useFormik({
    initialValues: isSignUp ? initialValuesOfSignup : initialValuesOfLogin,
    onSubmit: isSignUp ? signOnSubmit : loginOnSubmit,
    validationSchema: isSignUp
      ? validationSchemaOfSignup
      : validationSchemaOfLogin,
  });

  return (
    <>
      <br />
      <br />
      <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
        <div className="form sign-in">
          <h2 className="my-3">Welcome to <b>Dmythra</b></h2>
          <div className="loginForm">
            <form onSubmit={formik.handleSubmit}>
              <label>
                <span>Email</span>
                <input
                  className="loginInput"
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p
                    className="text-danger"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.email}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Password</span>
                <input
                  className="loginInput"
                  type="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p
                    className="text-danger"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.password}
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
            <form onSubmit={formik.handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="username"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.username}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.email}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.password}
                  </p>
                ) : null}
              </label>
              <label>
                <span>Confirm password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.confirmPassword}
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
