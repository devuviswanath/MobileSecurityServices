import React, { useRef } from "react";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkow1yj",
        "template_iywtmaq",
        form.current,
        "i5YblMb9e0ECDegph"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.info("Message Sent Successfully");
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                    ref={form}
                    onSubmit={sendEmail}
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="phone"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Send"
                        className="button border border-dark"
                      />
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
