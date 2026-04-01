// const skills = [
//   { name: "HTML", icon: "/skills/html.png" },
//   { name: "CSS", icon: "/skills/css.png" },
//   { name: "JavaScript", icon: "/skills/javascript.png" },
//   { name: "React", icon: "/skills/react.png" },
//   { name: "Redux", icon: "/skills/redux.png" },
//   { name: "Node JS", icon: "/skills/node.png" },
//   { name: "Express", icon: "/skills/express.png" },
//   { name: "MongoDB", icon: "/skills/mongodb.png" },
//   { name: "GitHub", icon: "/skills/github.png" },
//   { name: "Firebase", icon: "/skills/firebase.png" },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//     //   className="w-full min-h-screen bg-gradient-to-br from-[#050816] via-[#0b0f2e] to-[#020617] py-24"
//     className="relative w-full min-h-screen
//         bg-gradient-to-b from-[#050816] via-[#0b0f2e] to-[#020617]
//         pt-32 pb-24
//         overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-bold text-left text-slate-100 mb-12">
//           Skills
//           <span className="block w-16 h-1 bg-indigo-500 mt-4"></span>
//         </h2>

//         <p className="text-slate-400 mt-4 mb-16">
//           These are the technologies I've worked with
//         </p>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center p-6
//                          hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="w-16 h-16 object-contain mb-4"
//               />
//               <p className="text-slate-300 text-sm tracking-wider uppercase">
//                 {skill.name}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Redux", icon: "/skills/redux.png" },
  { name: "Node JS", icon: "/skills/node.png" },
  { name: "Express", icon: "/skills/express.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "GitHub", icon: "/skills/github.png" },
  { name: "Firebase", icon: "/skills/firebase.png" }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#050816] via-[#0b0f2e] to-[#020617] pt-32 pb-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-left text-slate-100 mb-6"
        >
          Skills
          <span className="block w-16 h-1 bg-indigo-500 mt-4"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mb-16"
        >
          These are the technologies I've worked with
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl
                         bg-white/5 backdrop-blur-md border border-white/10
                         shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />

              <p className="text-slate-300 text-sm tracking-wider uppercase">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
