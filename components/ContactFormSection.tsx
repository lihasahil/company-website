/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;600&display=swap');
        .font-urbanist { font-family: 'Urbanist', sans-serif; }

        .underline-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #F2F2F2;
          padding: 5px 5px;
          color: #F2F2F2;
          font-family: 'Urbanist', sans-serif;
          font-size: 18px;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .underline-input::placeholder { color: #F2F2F2; opacity: 0.6; }
        .underline-input:focus { border-bottom-color: #056DBC; }
        select.underline-input option { background: #0d0d0d; color: #F2F2F2; }

        .submit-btn {
          background: #056DBC;
          border: none;
          border-radius: 24px;
          padding: 12px 24px;
          width: 248px;
          height: 50px;
          color: #F2F2F2;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 400;
          cursor: pointer;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .submit-btn:hover {
          background: #0560a8;
          box-shadow: 0 0 30px rgba(5,109,188,0.5);
          transform: translateY(-1px);
        }
      `}</style>

      <section
        id="contact-form"
        className="font-urbanist h-screen relative w-full overflow-hidden pt-24 pb-12 md:pb-30 lg:pb-36 px-6"
      >
        {/* GIF full background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/sphere.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(80,20,180,0.3) 0%, rgba(0,0,0,0.82) 65%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto" style={{ maxWidth: "1296px" }}>
          <motion.div
            variants={makeFadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-[#F2F2F2] mt-10 font-light text-5xl mb-4">
              Get In Touch
            </h2>
            <div className="w-full h-px bg-[#F2F2F2] mb-4" />
            <p className="text-[#F2F2F2] font-light text-lg max-w-2xl mx-auto">
              Contact us to get connected with our team of experts. We are here
              to help you with your AI and software development needs.
            </p>
          </motion.div>
          <motion.div
            variants={makeFadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col lg:flex-row items-start gap-10"
          >
            {/* LEFT — Map */}
            <motion.div
              variants={makeFadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="shrink-0 w-full lg:w-130.5 h-129 rounded-3xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31!2d85.2910!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                width="80%"
                height="80%"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* RIGHT — Form + Contact Info */}
            <div className="flex flex-col justify-between w-full lg:w-174">
              {/* Form fields */}
              <motion.div
                variants={makeFadeUp(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col gap-10"
                style={{ maxWidth: "632px" }}
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#F2F2F2] font-light text-lg">
                    Name
                  </label>
                  <input
                    className="underline-input"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email + Phone */}
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[#F2F2F2] font-light text-lg">
                      Email
                    </label>
                    <input
                      className="underline-input"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[#F2F2F2] font-light text-lg">
                      Phone Number
                    </label>
                    <input
                      className="underline-input"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#F2F2F2] font-light text-lg">
                    Select the service or industry
                  </label>
                  <select
                    className="underline-input"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Choose an option</option>
                    <option value="chatbot">AI Chatbot Development</option>
                    <option value="backend">Scalable Backend Systems</option>
                    <option value="automation">Automation Solutions</option>
                    <option value="consulting">AI Consulting</option>
                  </select>
                </div>

                {/* Submit */}
                <button className="submit-btn">Submit</button>
              </motion.div>

              {/* Contact info row */}
              <motion.div
                variants={makeFadeUp(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-row items-center gap-6 px-6 py-3"
                style={{ maxWidth: "694px" }}
              >
                {/* Phone */}
                <div className="flex flex-row items-center gap-4">
                  <div className="w-11.25 h-11.25 shrink-0">
                    <svg
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M34 29.5c0 .6-.1 1.1-.4 1.6-.3.5-.7 1-1.2 1.4-.8.7-1.7 1.1-2.7 1.1-.7 0-1.4-.2-2.2-.5-.8-.3-1.6-.8-2.4-1.4-.8-.6-1.6-1.3-2.3-2.1-.7-.8-1.4-1.6-2-2.4-.6-.8-1.1-1.6-1.4-2.4-.3-.8-.5-1.5-.5-2.2 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.3-1.5.7-.5 1.4-.7 2.2-.7.3 0 .6.1.9.2.3.1.6.3.8.6l2.8 3.9c.2.3.4.6.5.9.1.3.2.5.2.8 0 .3-.1.7-.3 1-.2.3-.4.6-.7.9l-.9.9c-.1.1-.2.3-.2.5 0 .1 0 .2.1.3.1.1.1.2.2.3.4.6.9 1.2 1.4 1.7.6.6 1.2 1.1 1.8 1.5.1.1.2.1.3.2.1.1.3.1.4.1.2 0 .4-.1.5-.2l.9-.9c.3-.3.6-.5.9-.7.3-.2.6-.3.9-.3.2 0 .5.1.8.2.3.1.6.3.9.5l3.9 2.8c.3.2.5.5.6.8.1.3.2.6.2.9z"
                        stroke="#F2F2F2"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#F2F2F2] font-semibold text-[18px]">
                      Phone
                    </span>
                    <span className="text-[#F2F2F2] font-semibold text-[18px]">
                      +977 9876543210
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-black mx-2" />

                {/* Email */}
                <div className="flex flex-row items-center gap-4">
                  <div className="w-10 h-10 shrink-0">
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                    >
                      <path
                        d="M32 8H8C5.8 8 4 9.8 4 12v16c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4z"
                        stroke="#F2F2F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36 12L20 22 4 12"
                        stroke="#F2F2F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#F2F2F2] font-semibold text-[18px]">
                      Email Address
                    </span>
                    <span className="text-[#F2F2F2] font-semibold text-[18px]">
                      hemantgoyal@nxtwaveai.com
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
