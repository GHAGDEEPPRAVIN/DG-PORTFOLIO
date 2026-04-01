import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center
      bg-gradient-to-b from-[#050816] via-[#0b0f2e] to-[#020617]
      pt-32 pb-24 overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6 md:px-20">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-100 mb-16"
        >
          About
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="block h-1 bg-indigo-500 mx-auto mt-4"
          />
        </motion.h2>

        {/* 🔥 Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* 👈 LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

              {/* Image */}
              <motion.img
                src="/profile.jpeg"
                alt="profile"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
              />
            </div>
          </motion.div>

          {/* 👉 RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-400 text-lg"
          >
            <p className="text-3xl font-medium text-slate-100">
              Hi, I'm <span className="text-indigo-400">Deep Ghag</span>, nice to meet you.
            </p>

            <p>
              Please take a look around and explore my work, skills, and experience.
              I enjoy building clean, user-friendly, and scalable websites.
            </p>

            <p>
              A dedicated{" "}
              <span className="text-slate-100 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              seeking opportunities to contribute to meaningful projects.
            </p>

            <p>
              I thrive in collaborative environments and continuously improve my skills.
            </p>

            {/* 🔥 Skills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Node.js", "MongoDB", "JavaScript"].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}