import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactLeft from "./ContactLeft";
import Title from "../layouts/Title";

const Contact = () => {
  const formRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8o93y2s",
        "template_wyr4jjr",
        formRef.current,
        "Hvx3vYjg2wgZVK56g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMsg("Your message has been sent successfully!");
          setErrMsg("");
          formRef.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error(error.text);
          setErrMsg("Failed to send message. Please try again later.");
          setSuccessMsg("");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />

          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label
                    htmlFor="username"
                    className="text-sm text-gray-400 uppercase tracking-wide"
                  >
                    Your name
                  </label>
                  <input
                    id="username"
                    name="from_name"
                    type="text"
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label
                    htmlFor="phoneNumber"
                    className="text-sm text-gray-400 uppercase tracking-wide"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phone_number"
                    type="text"
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="subject"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
