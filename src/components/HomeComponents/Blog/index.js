import React from "react";
import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Blog() {
  return (
    <Formik
      initialValues={{ firstName: "", password: "", email: "", repert: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required")
          .trim(),

        email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .trim(),

        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),

        repert: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <label htmlFor="repert">Password repert</label>
          <Field name="repert" type="password" />
          <ErrorMessage name="repert" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Blog;
