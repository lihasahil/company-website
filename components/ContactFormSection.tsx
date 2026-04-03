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
          font-size: 15px;
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
          padding: 10px 24px;
          width: 100%;
          max-width: 248px;
          height: 46px;
          color: #F2F2F2;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          cursor: pointer;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .submit-btn:hover {
          background: #0560a8;
          box-shadow: 0 0 30px rgba(5,109,188,0.5);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .submit-btn { max-width: 100%; }
        }
      `}</style>

      <section
        id="contact-form"
        className="font-urbanist relative w-full overflow-hidden
          pt-24 sm:pt-28 md:pt-32 lg:pt-24
          pb-10 md:pb-16 lg:pb-20
          px-4 sm:px-6 md:px-8"
      >
        {/* GIF full background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/sphere.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(80,20,180,0.3) 0%, rgba(0,0,0,0.82) 65%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1296px]">
          {/* Heading — reduced spacing at lg */}
          <motion.div
            variants={makeFadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-6 sm:mb-8 lg:mb-6"
          >
            <h2
              className="bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent font-medium
              text-3xl sm:text-4xl lg:text-5xl
              mb-2 sm:mb-3"
            >
              Get In Touch
            </h2>
            <div className="w-full h-px bg-[#F2F2F2] mb-2 sm:mb-3" />
            <p
              className="text-[#F2F2F2] font-light
              text-sm sm:text-base lg:text-sm
              max-w-2xl mx-auto"
            >
              Contact us to get connected with our team of experts. We are here
              to help you with your AI and software development needs.
            </p>
          </motion.div>

          {/* Main layout */}
          <motion.div
            variants={makeFadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8"
          >
            {/* LEFT — Map: shorter at lg */}
            <motion.div
              variants={makeFadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full lg:w-[380px] xl:w-[480px] shrink-0 rounded-3xl overflow-hidden"
              style={{ height: "clamp(200px, 36vw, 480px)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31!2d85.2910!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "24px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* RIGHT — Form + Contact Info */}
            <div className="flex flex-col gap-5 lg:gap-4 w-full">
              {/* Form fields */}
              <motion.div
                variants={makeFadeUp(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col gap-5 lg:gap-4 xl:gap-6 w-full"
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#F2F2F2] font-light text-base lg:text-sm xl:text-lg">
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
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-4 xl:gap-6">
                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[#F2F2F2] font-light text-base lg:text-sm xl:text-lg">
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
                    <label className="text-[#F2F2F2] font-light text-base lg:text-sm xl:text:lg">
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
                  <label className="text-[#F2F2F2] font-light text-base lg:text-sm xl:text-lg">
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

              {/* Contact info */}
              <motion.div
                variants={makeFadeUp(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-2 xl:py-10"
              >
                {/* Phone */}
                <div className="flex flex-row items-center gap-3">
                  <div className="shrink-0">
                    <img src="/contact.svg" alt="contact"/>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#F2F2F2] font-semibold text-sm md:text-base">
                      Phone
                    </span>
                    <span className="text-[#F2F2F2] font-semibold text-sm md:text-base">
                      +977 9876543210
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px sm:w-px sm:h-8 bg-white/20" />

                {/* Email */}
                <div className="flex flex-row items-center gap-3">
                  <div className="shrink-0">
                     <img src="/email.svg" alt="email" className="h-12"/>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#F2F2F2] font-semibold text-sm md:text-base">
                      Email Address
                    </span>
                    <span className="text-[#F2F2F2] font-semibold text-xs sm:text-sm break-all">
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
