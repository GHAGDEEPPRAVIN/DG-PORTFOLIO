// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 h-16 md:h-20 flex justify-between items-center text-white">

//           {/* Logo */}
//           <div className="text-lg md:text-xl font-bold">
//             Deep Ghag
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm md:text-base">
//             {["home", "about", "skills", "project", "contact"].map(item => (
//               <li key={item}>
//                 <button
//                   onClick={() => scrollToSection(item)}
//                   className="hover:text-indigo-400 transition"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <a
//                 href="/resume/Deep-Developer-Resume.pdf"
//                 className="hover:text-indigo-400 transition"
//               >
//                 Resume
//               </a>
//             </li>
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden text-3xl focus:outline-none"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-16 left-0 w-full bg-black/90 backdrop-blur-lg
//         md:hidden z-40 transition-all duration-300
//         ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
//       >
//         <ul className="flex flex-col items-center gap-6 py-8 text-white text-lg">
//           {["home", "about", "skills", "work", "contact"].map(item => (
//             <li key={item}>
//               <button
//                 onClick={() => scrollToSection(item)}
//                 className="hover:text-indigo-400 transition"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             </li>
//           ))}
//           <li>
//             <a
//               href="/resume/Deep_Ghag_Resume.docx"
//               className="hover:text-indigo-400 transition"
//             >
//               Resume
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = ["home", "about", "skills", "work", "contact"];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 h-16 md:h-20 flex justify-between items-center text-white">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-xl font-bold tracking-wide"
          >
            Deep Ghag
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm md:text-base">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-indigo-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="/resume/Deep-Developer-Resume.pdf"
                className="px-4 py-1 border border-indigo-500 rounded-full hover:bg-indigo-500 transition"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-black/90 backdrop-blur-xl md:hidden z-40"
          >
            <ul className="flex flex-col items-center gap-6 py-10 text-white text-lg">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-indigo-400 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}

              <li>
                <a
                  href="/resume/Deep-Developer-Resume.pdf"
                  className="px-5 py-2 border border-indigo-500 rounded-full hover:bg-indigo-500 transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
