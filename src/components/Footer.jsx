import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ghag-deep-2b013b348/",
    icon: "/contact/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/GHAGDEEPPRAVIN",
    icon: "/contact/github.png",
  },
  {
    name: "Email",
    url: "mailto:deepghag48@gmail.com",
    icon: "/contact/email.png",
  },
  {
    name: "Call",
    url: "tel:+917778801521",
    icon: "/contact/phone.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-slate-400 text-sm"
        >
          © {new Date().getFullYear()} Ghag Deep. All rights reserved.
        </motion.div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0b0f2e] p-3 rounded-full shadow-md hover:bg-indigo-600 transition"
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}