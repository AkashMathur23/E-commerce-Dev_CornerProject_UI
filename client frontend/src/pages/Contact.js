import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall, BiMailSend, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta tittle={"Contact Us"} />
      <BreadCrumb tittle="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28400.57337461863!2d77.9902208651678!3d27.154035096231134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397476d0bb4ec4e7%3A0x1ee71324a0d04293!2sDeviram%20Sweets%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1683529614543!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border:0 w-100"
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-tittle mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Contact Us</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-tittle mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address>
                          Hno.224, Near village Cgopal, Mandura, Sonipat,
                          Haryana
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +91 8279581334">+91 8279581334</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiMailSend className="fs-5" />
                        <a href="mathurakash6@gmail.com">
                          mathurakash6@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0 ">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
