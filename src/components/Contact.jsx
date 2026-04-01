import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const contacts = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ghag-deep-2b013b348/", icon: "/contact/linkedin.png", bg: "bg-[#2563eb]" },
  { name: "GitHub", url: "https://github.com/GHAGDEEPPRAVIN", icon: "/contact/github.png", bg: "bg-[#2f2f2f]" },
  { name: "Email", url: "mailto:deepghag48@gmail.com", icon: "/contact/email.png", bg: "bg-[#6ec7b2]" },
  { name: "Resume", url: "/resume/Deep-Developer-Resume.pdf", icon: "/contact/resume.png", bg: "bg-[#5b6470]" },
  { name: "Call", url: "tel:+917778801521", icon: "/contact/phone.png", bg: "bg-[#ff7b7b]" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lebzjtl",
        "template_eft92ul",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "lopHTWBOUINCX-QeC"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center
      bg-gradient-to-b from-[#050816] via-[#0b0f2e] to-[#020617]
      pt-32 pb-24 overflow-hidden"
    >
      <div className="w-full max-w-6xl px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-12">
          Contact
          <span className="block w-16 h-1 bg-indigo-500 mt-4"></span>
        </h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0b0f2e] p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#020617] text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#020617] text-white outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#020617] text-white outline-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 py-3 rounded-lg text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}