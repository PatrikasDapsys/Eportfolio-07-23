import React, { useRef, useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  function handleSendEmail() {
    event.preventDefault();
    console.log('reanm')

    emailjs
      .sendForm("service_wiq41dr", "template_b6k9xcc", form.current, "JjmDr3ETYEd2mYjNo")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section
      className="h-[200vh] bg-primary-900 text-white flex flex-col items-center pt-16"
      id="contact"
    >
      <h1
        className="h-[136px] text-center flex pb-16 pl-0 uppercase z-[3] tracking-normal text-5xl 
       sm:pl-[20px] sm:tracking-[20px]
        md:pl-[60px] md:tracking-[60px] xs:text-6xl xl:text-7xl"
      >
        Contact
      </h1>
      <div className="border-2 w-3/5 flex flex-col items-center">
        {/* TEXT */}
        <div className="text-center my-8 w-4/5 text-xl font-normal text-primary-300">
          I am actively seeking job opportunities and welcome any inquiries
          related to potential employment, reviews, invitations to collaborate
          on projects, or if you have any questions. Your feedback and
          testimonials are valuable to me, and I am open to exploring new
          projects and partnerships. Please feel free to reach out using the
          provided contact form. I look forward to connecting with you.
        </div>
        <hr className="w-[90%]" />
        {/* FORM */}
        <form
          ref={form}
          type="submit"
          className="flex flex-col items-center w-4/5"
          onSubmit={handleSendEmail}
        >
          <InputField
            type={"email"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            width="80%"
          >
            Email
          </InputField>
          <InputField
            width="70%"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          >
            title
          </InputField>
          <Textarea
            width="90%"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
          >
            Message
          </Textarea>

          <button
            type="submit"
            className="w-2/5 pl-[20px] h-16 border my-8 uppercase tracking-[20px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
