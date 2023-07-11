import React, { useRef, useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import emailjs from "@emailjs/browser";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { useAlert } from "react-alert";

function Contact() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const alert = useAlert();

  function handleSendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_wiq41dr",
        "template_b6k9xcc",
        event.target,
        "JjmDr3ETYEd2mYjNo"
      )
      .then(
        () => {
          setEmail("");
          setTitle("");
          setMessage("");
          alert.success("email sent succesfully!");
        },
        () => {
          alert.error("Email wasn't sent!");
        }
      );
  }

  const mask = "absolute z-[2] bg-primary-900 ";

  return (
    <section
      className="bg-primary-900 text-white flex flex-col items-center py-16 relative"
      id="contact"
    >
      {/* MASK */}
      <div className={mask + "top-0 w-full h-[200px]"}></div>
      <div className={mask + "left-0 h-full w-[10%]  sm:w-1/5"}></div>
      <div className={mask + "right-0 h-full w-[10%] sm:w-1/5"}></div>
      <div className={mask + "bottom-0 w-full h-16"}></div>
      {/* TITLE */}
      <h1
        className="h-[136px] text-center flex pb-16 pl-0 uppercase z-[3] tracking-normal text-5xl 
       sm:pl-[20px] sm:tracking-[20px]
        md:pl-[60px] md:tracking-[60px] xs:text-6xl xl:text-7xl"
      >
        Contact
      </h1>
      <div className="border-2  flex flex-col items-center first-letter w-4/5 sm:w-3/5">
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
          method="POST"
          className="flex flex-col items-center w-4/5"
          onSubmit={handleSendEmail}
        >
          <InputField
            type={"email"}
            value={email}
            name="email"
            onChange={(ev) => setEmail(ev.target.value)}
            width="80%"
          >
            Email
          </InputField>
          <InputField
            width="70%"
            value={title}
            name="title"
            onChange={(ev) => setTitle(ev.target.value)}
          >
            title
          </InputField>
          <Textarea
            width="90%"
            name="message"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
          >
            Message
          </Textarea>

          <AnimatedButton type="submit">Submit</AnimatedButton>
        </form>
      </div>
    </section>
  );
}

export default Contact;
