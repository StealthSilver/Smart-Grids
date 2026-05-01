"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/ShimmerButton";
import { EdgeLines } from "../ui/EdgeLines";

const mapsEmbedSrc = () => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return null;
  const q =
    "Smart+Grid+Analytics+Pvt+Ltd,2nd+Floor+MSM+Plaza+Service+Road+Outer+Ring+Rd+Banaswadi+Bengaluru+Karnataka+560113";
  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${q}&zoom=15&maptype=roadmap`;
};

const inputClassName =
  "w-full rounded-[6px] border border-gray-300 bg-white px-3 py-2 sm:px-4 sm:py-2.5 text-sm text-gray-900 placeholder:text-gray-500 transition-[border-color,box-shadow] duration-200 ease-out focus:border-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/20 font-sans";

const labelClassName =
  "mb-1.5 block text-sm font-medium text-gray-900 font-sans";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setPrivacyAccepted(false);

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        console.error("Error sending email:", data.error);

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const embedUrl = mapsEmbedSrc();

  return (
    <section
      id="contact"
      data-snap-section
      className="relative w-full px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          <div
            className="relative z-10 w-full overflow-hidden border border-gray-200/90 bg-white shadow-sm order-1 lg:order-2"
            style={{ borderRadius: 6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 p-5 sm:p-6 lg:p-7">
              <div>
                <label htmlFor="contact-name" className={labelClassName}>
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClassName}>
                  Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="contact-company" className={labelClassName}>
                  Company
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClassName}>
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClassName} resize-none`}
                  placeholder="Tell us about your project and requirements..."
                />
              </div>

              <div className="pt-1">
                <label className="flex cursor-pointer items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex h-5 items-center">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="size-4 cursor-pointer rounded border-gray-300 bg-white text-[#FF7F00] focus:ring-2 focus:ring-[#FF7F00]/30 focus:ring-offset-0"
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-600 font-sans">
                    We value your privacy. By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#FF7F00] underline transition-colors hover:text-[#e67200]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="pt-1">
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted}
                  className="w-full rounded-[6px] px-4 py-2.5 sm:py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50 font-sans sm:text-base"
                  background="#FF7F00"
                  shimmerColor="#ffffff"
                  borderRadius="6px"
                >
                  {isSubmitting ? "SENDING..." : "CONNECT NOW"}
                </ShimmerButton>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-semibold text-green-700 font-sans"
                >
                  Thank you! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-semibold text-red-600 font-sans"
                >
                  Failed to send message. Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </div>

          <div className="w-full space-y-6 sm:space-y-7 order-2 lg:order-1">
            <div className="space-y-5 sm:space-y-6 lg:mt-2">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  title: "Email Us",
                  text: "info@sgrids.io",
                  href: "mailto:info@sgrids.io",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  title: "Call Us",
                  text: "+91 95133 79911",
                  href: "tel:+919513379911",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 sm:h-10 sm:w-10"
                    style={{ borderRadius: 6 }}
                  >
                    <svg
                      className="size-4 text-gray-600 sm:size-[18px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-900 sm:text-base">
                      {item.title}
                    </h4>
                    <a
                      href={item.href}
                      className="mt-0.5 inline-block text-sm leading-relaxed text-gray-600 transition-colors hover:text-[#FF7F00] font-sans"
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 sm:h-10 sm:w-10"
                  style={{ borderRadius: 6 }}
                >
                  <svg
                    className="size-4 text-gray-600 sm:size-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-sans text-sm font-semibold text-gray-900 sm:text-base">
                    Visit Us
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 font-sans">
                    Smart Grid Analytics Pvt Ltd<br />
                    2nd Floor, MSM Plaza, Service Road, Outer Ring Rd, Banaswadi,<br />
                    Bengaluru, Karnataka 560113
                  </p>
                  {embedUrl ? (
                    <div
                      className="mt-4 overflow-hidden border border-gray-300 sm:mt-6"
                      style={{ borderRadius: 6 }}
                    >
                      <iframe
                        title="Smart Grid Analytics office location"
                        src={embedUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full sm:h-[220px] lg:h-[260px]"
                      />
                    </div>
                  ) : (
                    <p className="mt-2 font-sans text-xs text-gray-500">
                      Map preview requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
