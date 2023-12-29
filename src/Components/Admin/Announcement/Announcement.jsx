import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { uploadAnnouncement } from "../../../Services/adminApi";
import { toast } from "react-toastify";
function Announcement() {
  const initialValues = {
    announcementTopic: "",
    announcementDescription: "",
  };
  const onSubmit = async (values) => {
    const { data } = await uploadAnnouncement(values);
    console.log(data, "2255");
    if (data.status) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  const validationSchema = Yup.object({
    announcementTopic: Yup.string()
      .min(6, "*Name must be at least 6 characters long")
      .required("* This field is required"),
    announcementDescription: Yup.string()
      .min(8, "*Name must be at least 8 characters long")
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
              <h2 className="">Announcement</h2>
              <center>
                <p>Fill the details about your announcement</p>
              </center>
            </div>

            <div className="fformbold-mb-3">
              <div>
                <label for="phone" className="formbold-form-label">
                  Announcement Topic
                </label>
                <input
                  type="text"
                  name="announcementTopic"
                  id="phone"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.announcementTopic}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.announcementTopic &&
              formik.errors.announcementTopic ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.announcementTopic}
                </p>
              ) : null}
            </div>
            <div className="fformbold-mb-3">
              <div>
                <label for="phone" className="formbold-form-label">
                  Announcement description
                </label>
                <textarea
                  type="text"
                  name="announcementDescription"
                  id="phone"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.announcementDescription}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.announcementDescription &&
              formik.errors.announcementDescription ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.announcementDescription}
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

export default Announcement;
