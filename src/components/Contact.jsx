import React, { useRef, useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import emailjs from "@emailjs/browser";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { useAlert } from "react-alert";
import { motion } from "framer-motion";

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
          alert.error(
            "Email wasn't sent! Try again or email me directly at Email@email.com"
          );
        }
      );
  }

  return (
    <section className="section py-16" id="contact">
      {/* MASK */}
      <div className={"mask top-0 w-full h-[200px]"}></div>
      <div
        className={"mask left-0 w-[10%]  sm:w-1/5"}
        style={{ height: "calc(100% - 4rem)" }}
      ></div>
      <div
        className={"mask right-0 w-[10%]  sm:w-1/5"}
        style={{ height: "calc(100% - 4rem)" }}
      ></div>
      <div className={"mask bottom-0 w-full h-16"}></div>
      {/* TITLE */}
      <h1 className="title">Contact</h1>
      <div className="border-2  flex flex-col items-center first-letter w-4/5 sm:w-3/5">
        {/* TEXT */}
        <div className="text-center my-8 w-4/5 text-xl font-normal text-light-500 dark:text-dark-300">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 1, }}
            variants={{
              hidden: { opacity: 0, y: 100, scale: 2 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="w-full flex justify-center"
          >
            <AnimatedButton type="submit">Submit</AnimatedButton>
          </motion.div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
