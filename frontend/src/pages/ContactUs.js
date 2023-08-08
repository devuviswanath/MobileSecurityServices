import React, { useState } from "react";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
const phoneRegExp =
  /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/;
const emailRegExp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
const contactSchema = yup.object({
  name: yup.string().required("FullName is Required"),
  email: yup
    .string()
    .nullable()
    .matches(emailRegExp, "Please enter a valid email (test@gmail.com)")
    .email("Email should be valid")
    .required("Email address is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Please enter a 10 digit valid phone number")
    .required("Mobile number is Required"),
  message: yup.string().required("Message is Required"),
});
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        emailjs
          .send(
            "service_vkow1yj",
            "template_iywtmaq",
            values,
            "i5YblMb9e0ECDegph"
          )
          .then((result) => {
            setSubmitting(false);
            resetForm();
            toast.info("Message Sent Successfully");
            console.log(result.text);
            console.log("Message sent");
          });
      } catch (error) {
        console.log(error.text);
        setSubmitting(false);
      }
    },
  });

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_vkow1yj",
  //       "template_iywtmaq",
  //       values,
  //       "i5YblMb9e0ECDegph"
  //     )
  //     .then(
  //       (result) => {
  //         e.target.reset();
  //         toast.info("Message Sent Successfully");
  //         console.log(result.text);
  //         console.log("Message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <>
      <Meta title={"Contact Us"} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9970721810705!2d-79.67672018465905!3d43.627419879122144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b409fb8a947f9%3A0x418640e93fdafd13!2sLambton%20College!5e0!3m2!1sen!2sca!4v1680145927622!5m2!1sen!2sca"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="=col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                      />
                      <div className="error">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange("phone")}
                        onBlur={formik.handleBlur("phone")}
                      />
                      <div className="error">
                        {formik.touched.phone && formik.errors.phone}
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                        value={formik.values.message}
                        onChange={formik.handleChange("message")}
                        onBlur={formik.handleBlur("message")}
                      ></textarea>
                      <div className="error">
                        {formik.touched.message && formik.errors.message}
                      </div>
                    </div>
                    <div>
                      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button className="button border-0">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-item-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Lambton College, 121 Brunel Rd, Mississauga
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-item-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:905-890-7833">905-890-7833</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-item-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:mobilesecurityservices@gmail.com">
                          mobilesecurityservices@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-item-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM to 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Contact;
