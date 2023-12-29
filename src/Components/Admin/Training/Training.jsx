import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Training.css";
import { uploadTrainingDetails } from "../../../Services/adminApi";
import { toast } from "react-toastify";
function Training() {
  const initialValues = {
    videoName: "",
    videoDescription: "",
    videoLink: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const { data } = await uploadTrainingDetails(values);
    if (data.status) {
      toast.success(data.message);
      resetForm({
        values: initialValues,
      });
    } else {
      toast.error(data.message);
    }
  };

  const validationSchema = Yup.object({
    videoName: Yup.string()
      .min(6, "*Name must be at least 6 characters long")
      .required("* This field is required"),
    videoDescription: Yup.string()
      .min(8, "*Name must be at least 8 characters long")
      .required("* This field is required"),
    videoLink: Yup.string()
      .required("YouTube link is required")
      .test("is-youtube-link", "Please enter a valid YouTube link", (value) =>
        isValidYoutubeLink(value)
      ),
  });

  const isValidYoutubeLink = (value) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)/;
    return youtubeRegex.test(value);
  };

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
              <h2 className="">Add Training Details</h2>
              <center>
                <p>Fill the details about your Training video</p>
              </center>
            </div>

            <div className="fformbold-mb-3">
              <div>
                <label for="phone" className="formbold-form-label">
                  Training Video Name
                </label>
                <input
                  type="text"
                  name="videoName"
                  id="phone"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.videoName}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.videoName && formik.errors.videoName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.videoName}
                </p>
              ) : null}
            </div>
            <div className="fformbold-mb-3">
              <div>
                <label for="phone" className="formbold-form-label">
                  Training Video Description
                </label>
                <textarea
                  type="text"
                  name="videoDescription"
                  id="phone"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.videoDescription}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.videoDescription &&
              formik.errors.videoDescription ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.videoDescription}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Training Video Link
              </label>
              <input
                type="text"
                name="videoLink"
                id="address"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.videoLink}
                onChange={formik.handleChange}
              />
              {formik.touched.videoLink && formik.errors.videoLink ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.videoLink}
                </p>
              ) : null}
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>
          </form>
        </div>
        {/* <div className="row-container">
        <h2>Your Farms</h2>
        {farmDetails.length === 0 ? (
          <div className="emptyMessage">No farm details available</div>
        ) : (
          farmDetails.map((values, index) => (
            <div key={index} className="showFarm">
              {index + 1}. {values.farmName} - Licence ID :  {values.licenceID}
              
            </div>
          ))
        )}
      </div> */}
      </div>
    </div>
  );
}

export default Training;
