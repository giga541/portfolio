import "./contact.scss";
import { motion } from "framer-motion";
import Svg from "./Svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendEmail = e => {
    e.preventDefault();

    if (enteredMessage.trim() === "") {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_xz4nztl",
        "template_44txpiu",
        formRef.current,
        "RSsfeFL1smjajlFS4"
      )
      .then(
        result => {
          setSuccess(true);
          setError(false);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        error => {
          setError(true);
          setSuccess(false);
        }
      );

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>gigamikasha@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <Svg />
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={enteredName}
            onChange={e => setEnteredName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Mail"
            name="email"
            value={enteredEmail}
            onChange={e => setEnteredEmail(e.target.value)}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
          />
          <button>Submit</button>
          {error && <p>Error: Please enter a message</p>}
          {success && <p>Message has been successfully sent</p>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
