import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Donation.css";
import { donationReqest } from "../../../Services/userApi";
import { useSelector } from "react-redux";
function Donation() {
    const [image,setImage]=useState("")
  const initialValues = {
    situation: "",
    description: "",
    photo: null,
  };
  const user = useSelector((state) => state.user.value);
  const onSubmit = async (values) => {
    const { data } = await donationReqest(values, user?._id);
  };
  const validationSchema = Yup.object({
    situation: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      .required("* This field is required"),
    description: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      .required("* This field is required"),
    photo: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        // Assuming a maximum file size of 5 MB
        if (value) return value.size <= 5 * 1024 * 1024;
        return true;
      })
      .required("* This field is required"),
    photo: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        // Assuming a maximum file size of 5 MB
        if (value) return value.size <= 5 * 1024 * 1024;
        return true;
      })
      .test("fileFormat", "Invalid file format", (value) => {
        if (value) {
          const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
          return allowedFormats.includes(value.type);
        }
        return true;
      })
      .required("* This field is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage("image", file);
    formik.setFieldValue("image", file);
  };
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="formbold-form-title">
              <h2 className="">Donation Request</h2>
              <center>
                <p>Fill the details about your donation request</p>
              </center>
            </div>

            <div className="fformbold-mb-3">
              <div>
                <label for="situation" className="formbold-form-label">
                  Situation
                </label>
                <input
                  type="text"
                  name="situation"
                  id="situation"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.situation}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.situation && formik.errors.situation ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.situation}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="description" className="formbold-form-label">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.description}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="photo" className="formbold-form-label">
                Proof
              </label>
              <input
                type="file"
                name="image"
                id="address"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("photo", event.currentTarget.files[0]);
                  handleImage(event);
                  setImage(event.target.files[0]);
                }}
              />

              {formik.touched.photo && formik.errors.photo ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.photo}
                </p>
              ) : null}
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donation;
