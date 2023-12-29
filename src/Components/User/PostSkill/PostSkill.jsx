import "./PostSkill.css";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { postSkill } from "../../../Services/userApi";
import { toast } from "react-toastify";
function PostSkill() {
  const [image, setImage] = useState("");
  const initialValues = {
    caption: "",
    photo: null,
  };
  const user = useSelector((state) => state.user.value);
  const onSubmit = async (values, { resetForm }) => {
    const { data } = await postSkill(values, user?._id);
    if (data.status) {
      toast.success(data.message);
      resetForm();
    } else {
      toast.error("Unable to submit!");
    }
  };
  const validationSchema = Yup.object({
    caption: Yup.string()
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

  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="formbold-form-title">
              <h2 className="">Post</h2>
              <center>
                <p>Fill the details about your Skills</p>
              </center>
            </div>

            <div className="fformbold-mb-3">
              <div>
                <label for="situation" className="formbold-form-label">
                  Post Caption
                </label>
                <input
                  type="text"
                  name="caption"
                  id="caption"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.caption}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.caption && formik.errors.caption ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.caption}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="photo" className="formbold-form-label">
                Upload Image
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("photo", event.currentTarget.files[0]);
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

export default PostSkill;
