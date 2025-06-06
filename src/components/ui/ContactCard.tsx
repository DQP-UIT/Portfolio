"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const ContactCard = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await emailjs.sendForm(
        "service_te8vpqj",
        "template_i2ps7pf",
        formRef.current,
        "m60-5kmSspvnCi90-"
      );

      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen w-full rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact me now!</h1>
            <p className="py-6">
              I&rsquo;m an aspiring Frontend Developer passionate about building
              interactive and user-friendly web applications. Always eager to
              learn and collaborate on exciting projects! If you&rsquo;re
              looking for a motivated developer to work on your team or just
              want to chat about web development, feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-8 p-2">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/DQP-UIT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/phuoc-quang-995273336/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="mailto:22521149@gm.uit.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={20} />
                Email me →
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://drive.google.com/uc?export=download&id=17uWZvA_UnUd_cDuDv_em71uO2i_SKQc1"
                download="DQP_CV.pdf"
              >
                <FaDownload size={20} />
                Download my CV
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form ref={formRef} onSubmit={handleSubmit}>
                <fieldset className="fieldset" disabled={isSubmitting}>
                  <label className="fieldset-label">Your name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="input"
                    placeholder="Your name"
                    required
                  />

                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  <label className="fieldset-label">Your message</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="textarea textarea-neutral"
                    required
                  />

                  <button
                    type="submit"
                    className={`btn btn-neutral mt-4 ${
                      isSubmitting ? "loading" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>

                  {isSuccess && (
                    <div className="alert alert-success mt-4">
                      Message sent successfully! I&rsquo;ll get back to you
                      soon.
                    </div>
                  )}

                  {isError && (
                    <div className="alert alert-error mt-4">
                      Failed to send message. Please try again or contact me
                      directly via email.
                    </div>
                  )}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
