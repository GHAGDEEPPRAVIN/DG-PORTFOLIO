import { motion } from "framer-motion";

// ✅ Import images correctly
import linkedin from "/contact/linkedin.png";
import github from "/contact/github.png";
import email from "/contact/email.png";
import phone from "/contact/phone.png";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ghag-deep-2b013b348/",
    icon: linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/GHAGDEEPPRAVIN",
    icon: github,
  },
  {
    name: "Email",
    url: "mailto:deepghag48@gmail.com",
    icon: email,
  },
  {
    name: "Call",
    url: "tel:+917778801521",
    icon: phone,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-slate-400 text-sm"
          >
            © {new Date().getFullYear()} Ghag Deep. All rights reserved.
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0b0f2e] p-3 rounded-full shadow-lg 
                           border border-slate-700
                           hover:bg-indigo-600 hover:shadow-indigo-500/50
                           transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-800"></div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 text-xs mt-4"
        >
          Built with ❤️ using React & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}