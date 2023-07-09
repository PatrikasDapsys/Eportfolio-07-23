import React from "react";
import InputField from "./InputField";

function Contact() {
  return (
    <section
      className="h-screen bg-primary-900 text-white flex flex-col items-center pt-16"
      id="contact"
    >
      <h1
        className="h-[136px] text-center flex pb-16 pl-0 uppercase z-[3] tracking-normal text-5xl 
       sm:pl-[20px] sm:tracking-[20px]
        md:pl-[60px] md:tracking-[60px] xs:text-6xl xl:text-7xl"
      >
        Contact
      </h1>

      <div className="border-2 w-3/5 h-4/5 flex flex-col items-center">
        {/* TEXT */}
        <div className="text-center my-8 w-4/5 text-xl">
          I am actively seeking job opportunities and welcome any inquiries
          related to potential employment, reviews, invitations to collaborate
          on projects, or if you have any questions. Your feedback and
          testimonials are valuable to me, and I am open to exploring new
          projects and partnerships. Please feel free to reach out using the
          provided contact form. I look forward to connecting with you.
        </div>
        <hr className="w-[90%]" />
        {/* FORM */}
        <div className="flex flex-col items-center w-4/5">
          <InputField width="80%">Email</InputField>
          <InputField width="70%">title</InputField>
          <InputField width="70%">desc</InputField>

          {/* <div className="input-container">
            <input type="text" id="input" required="" />
            <label htmlFor="input" className="label">
              Enter Text
            </label>
            <div className="underline"></div>
          </div>

          <input type="text" placeholder="title" className="w-[70%] mt-10" />
          <textarea
            type="text"
            placeholder="message"
            rows={8}
            className="w-full mt-20 text-left"
          />
          <button className="w-2/5 pl-[20px] h-16 border mt-8 uppercase tracking-[20px]">
            Submit
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
