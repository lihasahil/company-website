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
        className="font-urbanist min-h-screen relative w-full overflow-hidden pt-24 pb-12 md:pb-30 lg:pb-36 px-6"
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
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-[#F2F2F2] mt-10 font-light text-4xl md:text-5xl mb-4">
              Get In Touch
            </h2>
            <div className="w-full h-px bg-[#F2F2F2]/20 mb-4" />
            <p className="text-[#F2F2F2] font-light text-base md:text-lg max-w-2xl mx-auto opacity-80">
              Contact us to get connected with our team of experts. We are here
              to help you with your AI and software development needs.
            </p>
          </motion.div>
          <motion.div
            variants={makeFadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
          >
            {/* LEFT — Map */}
            <motion.div
              variants={makeFadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="shrink-0 w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31!2d85.2910!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* RIGHT — Form + Contact Info */}
            <div className="flex flex-col justify-between w-full">
              {/* Form fields */}
              <motion.div
                variants={makeFadeUp(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col gap-8 md:gap-10 w-full"
                style={{ maxWidth: "700px" }}
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#F2F2F2] font-medium text-base md:text-lg">
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
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[#F2F2F2] font-medium text-base md:text-lg">
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
                    <label className="text-[#F2F2F2] font-medium text-base md:text-lg">
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
                  <label className="text-[#F2F2F2] font-medium text-base md:text-lg">
                    Select the service or industry
                  </label>
                  <select
                    className="underline-input cursor-pointer"
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
                <button className="submit-btn w-full sm:w-[248px] mt-4">Submit</button>
              </motion.div>

              {/* Contact info row */}
              <motion.div
                variants={makeFadeUp(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mt-16 pt-10 border-t border-white/10"
              >
                {/* Phone */}
                <div className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F2F2F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-sm">Phone</span>
                    <span className="text-[#F2F2F2] font-semibold text-lg">
                      +977 9876543210
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F2F2F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-sm">Email Address</span>
                    <span className="text-[#F2F2F2] font-semibold text-lg">
                      info@nxtwaveai.com
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
