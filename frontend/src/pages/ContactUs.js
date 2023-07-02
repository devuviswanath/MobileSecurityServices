import React from 'react';
import Container from '../componenets/Container';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";


export default function ContactUs() {
  // const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  //const [message, setMessage] = useState('');
  return (
    <>
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
            <div className='form'>
              <h2 className='heading'> Contact </h2>

              <div className="form-control">
                <input
                  type="text"

                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"

                  placeholder="Email"
                  name="email"

                />
              </div>
              <div className="form-control">
                <input
                  type="tel"

                  placeholder="Mobile Number"
                  name="phone"
                />
              </div>

              <div className="form-control">
                <textarea
                  name="message"
                  id=''
                  cols="30"
                  rows="4"
                />

              </div>
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
        <div className='rightContact'>
          <h3 className="contact-title mb-4">Get in touch with us</h3>
          <div>
            <ul className="ps-5" >
              <li className="mb-3 d-flex gap-15 align-item-center">
                <AiOutlineHome className="fs-5" />
                <address className="mb-0">
                  75 Watline Avenue, Mississauga
                </address>
              </li>
              <li className="mb-3 d-flex gap-15 align-item-center">
                <BiPhoneCall className="fs-5" />
                <a href="tel:475-647-8756">475-647-8756</a>
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

      </Container >
    </>
  );
}
