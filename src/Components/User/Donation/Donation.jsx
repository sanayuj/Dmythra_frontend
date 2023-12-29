import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Donation.css";
import {
  donationReqest,
  fetchApprovedUserDonation,
} from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function Donation() {
  const [approvedDonation, setApprovedDonation] = useState([]);
  const initialValues = {
    situation: "",
    description: "",
    image: null,
  };
  const user = useSelector((state) => state.user.value);
  const onSubmit = async (values, { resetForm }) => {
    const { data } = await donationReqest(values, user?._id);
    if (data.status) {
      toast.success(data.message);
      resetForm();
    } else {
      toast.error("Unable to submit");
    }
  };
  const ApprovedDonation = async (userId) => {
    const { data } = await fetchApprovedUserDonation(userId);
    if (data.status) {
      console.log(data, "****");
      setApprovedDonation(data.data);
    }
  };

  useEffect(() => {
    ApprovedDonation(user?._id);
  }, [user]);
  const validationSchema = Yup.object({
    situation: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      .required("* This field is required"),
    description: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      .required("* This field is required"),
    image: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
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
              <label for="image" className="formbold-form-label">
                Proof
              </label>
              <input
                type="file"
                name="image"
                id="address"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("image", event.target.files[0]);
                }}
              />

              {formik.touched.image && formik.errors.image ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.image}
                </p>
              ) : null}
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>
          </form>
          <h5 className="my-4">Approved Donation</h5>
          {approvedDonation.map((value) => (
            <div className="verified">{value.requestTitle}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Donation;
