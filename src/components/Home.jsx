import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse move (for parallax)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b0f2e] to-[#020617]"
    >

      {/* 🔥 Floating Glow Blob */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)`,
        }}
        className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-20 flex flex-col justify-center min-h-screen pt-24">
        
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-indigo-400 text-lg md:text-xl font-medium"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-100 mt-2"
        >
          Deep Ghag
        </motion.h1>

        {/* 🔥 Typewriter Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-400 mt-4"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
              "MERN Stack Developer 🚀",
              2000,
              "React Developer ⚛️",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mt-8 text-lg text-slate-400"
        >
          I build modern, scalable, and user-focused websites using
          React, JavaScript, and modern UI frameworks.
        </motion.p>

        {/* 🔥 Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-slate-200 text-slate-100 rounded-lg hover:bg-slate-200 hover:text-black transition"
          >
            View Work →
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}