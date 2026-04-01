// import { useState } from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "ACME Travel Website",
//     description: "An Travel website only designed using HTML.",
//     image: "/projects/acme.png",
//     tech: ["HTML"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-HTML/tree/main/Pratical-Exam",
//     viewLive: "https://fantastic-kringle-d4ea9e.netlify.app/",
//   },
//   {
//     title: "Dominos Website",
//     description: "An Dominos website only designed using HTML.",
//     image: "/projects/dominos-dis.png",
//     tech: ["HTML"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-HTML/tree/main/Dominos",
//     viewLive: "https://storied-truffle-05a912.netlify.app/",
//   },
//   {
//     title: "Happenstance Website",
//     description: "An Footwear website designed using HTML and CSS.",
//     image: "/projects/happenstance-dis.png",
//     tech: ["CSS"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/Happenstance",
//     viewLive: "https://melodic-mermaid-2fb2c2.netlify.app/",
//   },
//   {
//     title: "Hyundai Car Website",
//     description: "An Car website designed using HTML and CSS.",
//     image: "/projects/hyundai-dis.png",
//     tech: ["CSS"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/Hyundai",
//     viewLive: "https://earnest-moxie-46344d.netlify.app/",
//   },
//   {
//     title: "Zomato Food Website",
//     description: "An Food Website designed using HTML and CSS.",
//     image: "/projects/zomato.png",
//     tech: ["CSS"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/zomato",
//     viewLive: "https://elegant-duckanoo-5f234d.netlify.app/",
//   },
//   ,
//   {
//     title: "Company Website Template",
//     description: "An Template designed using HTML and CSS.",
//     image: "/projects/company.png",
//     tech: ["CSS"],
//     github: "",
//     viewLive: "",
//   },
//   {
//     title: "Admin Panel",
//     description: "An Admin Panel designed using HTML, CSS and Bootstrap.",
//     image: "/projects/adminpanel.png",
//     tech: ["Bootstrap"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-BOOTSTRAP/tree/main/Admin%20panel",
//     viewLive: "",
//   }, {
//     title: "Active Website",
//     description: "A Active Company Website Template designed using HTML, CSS and Bootstrap.",
//     image: "/projects/active.png",
//     tech: ["Bootstrap"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-BOOTSTRAP/tree/main/Active",
//     viewLive: "https://phenomenal-custard-94f8d1.netlify.app/",
//   }, {
//     title: "Ratio Coffee Machines Website",
//     description: "An backend of Json Based Coffee Machines Website designed using HTML, CSS and Javascript.",
//     image: "/projects/ratiocoffee.png",
//     tech: ["Javascript"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-JAVASCRIPT/tree/main/Ratio%20Coffee/html-files",
//     viewLive: "",
//   }, {
//     title: "WhatApp Clone Website",
//     description: "An Whatsapp like clone website designed using Redux and Database , authentication using Firebase.",
//     image: "/projects/whatappClone.png",
//     tech: ["Redux", "Firebase"],
//     github: "https://github.com/GHAGDEEPPRAVIN/DG-REDUX/tree/main/Redux-Firebase/WhatApp",
//     viewLive: "",
//   },
//   {
//     title: "Movie Management System",
//     description:
//       "MERN-based system to manage movies with full CRUD operations.",
//     image: "/projects/movie.png",
//     tech: ["MERN"],
//     github:
//       "https://github.com/GHAGDEEPPRAVIN/DG-NODE/tree/main/Movie_Management_System",
//   },
//   {
//     title: "Todo App",
//     description:
//       "React + Redux + Express app for managing tasks efficiently.",
//     image: "/projects/todo.png",
//     tech: ["React Js", "Redux", "Express Js"],
//     github:
//       "https://github.com/GHAGDEEPPRAVIN/DG-NODE/tree/main/Express/Todo_App",
//   },
//   {
//     title: "Library Management System",
//     description:
//       "System to manage books, users, and transactions using Firebase.",
//     image: "/projects/lms.png",
//     tech: ["React Js", "Redux", "Firebase"],
//     github:
//       "https://github.com/HETVI1405/library-management-system/tree/main/library_management",
//   },
// ];

// export default function Work() {
//   const [active, setActive] = useState("All");

//   const categories = [
//     "All",
//     ...new Set(projects.flatMap((p) => p.tech)),
//   ];

//   const filteredProjects =
//     active === "All"
//       ? projects
//       : projects.filter((p) => p.tech.includes(active));

//   return (
//     <section className="w-full min-h-screen bg-[#020617] py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-10">
//           My Projects
//         </h2>

//         {/* Tabs (ONLY ADDED) */}
//         <div className="flex flex-wrap gap-3 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`px-4 py-1.5 rounded-full text-sm border transition ${active === cat
//                   ? "bg-indigo-600 text-white border-indigo-600"
//                   : "border-gray-600 text-gray-300 hover:bg-white/10"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid (UNCHANGED UI) */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="relative group rounded-xl overflow-hidden shadow-lg"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover"
//               />

//               {/* Overlay Content */}
//               <div className="absolute inset-0 bg-black/80 translate-y-full group-hover:translate-y-0 transition duration-500 flex flex-col justify-center p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-gray-300 mb-4">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-indigo-600 px-2 py-1 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-indigo-400 hover:text-white text-sm"
//                 >
//                   View Code →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ACME Travel Website",
    description: "An Travel website only designed using HTML.",
    image: "/projects/acme.png",
    tech: ["HTML"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-HTML/tree/main/Pratical-Exam",
    viewLive: "https://fantastic-kringle-d4ea9e.netlify.app/",
  },
  {
    title: "Dominos Website",
    description: "An Dominos website only designed using HTML.",
    image: "/projects/dominos-dis.png",
    tech: ["HTML"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-HTML/tree/main/Dominos",
    viewLive: "https://storied-truffle-05a912.netlify.app/",
  },
  {
    title: "Happenstance Website",
    description: "An Footwear website designed using HTML and CSS.",
    image: "/projects/happenstance-dis.png",
    tech: ["CSS"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/Happenstance",
    viewLive: "https://melodic-mermaid-2fb2c2.netlify.app/",
  },
  {
    title: "Hyundai Car Website",
    description: "An Car website designed using HTML and CSS.",
    image: "/projects/hyundai-dis.png",
    tech: ["CSS"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/Hyundai",
    viewLive: "https://earnest-moxie-46344d.netlify.app/",
  },
  {
    title: "Zomato Food Website",
    description: "An Food Website designed using HTML and CSS.",
    image: "/projects/zomato.png",
    tech: ["CSS"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-CSS/tree/main/zomato",
    viewLive: "https://elegant-duckanoo-5f234d.netlify.app/",
  },
  ,
  {
    title: "Company Website Template",
    description: "An Template designed using HTML and CSS.",
    image: "/projects/company.png",
    tech: ["CSS"],
    github: "",
    viewLive: "",
  },
  {
    title: "Admin Panel",
    description: "An Admin Panel designed using HTML, CSS and Bootstrap.",
    image: "/projects/adminpanel.png",
    tech: ["Bootstrap"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-BOOTSTRAP/tree/main/Admin%20panel",
    viewLive: "",
  }, {
    title: "Active Website",
    description: "A Active Company Website Template designed using HTML, CSS and Bootstrap.",
    image: "/projects/active.png",
    tech: ["Bootstrap"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-BOOTSTRAP/tree/main/Active",
    viewLive: "https://phenomenal-custard-94f8d1.netlify.app/",
  }, {
    title: "Ratio Coffee Machines Website",
    description: "An backend of Json Based Coffee Machines Website designed using HTML, CSS and Javascript.",
    image: "/projects/ratiocoffee.png",
    tech: ["Javascript"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-JAVASCRIPT/tree/main/Ratio%20Coffee/html-files",
    viewLive: "",
  }, {
    title: "WhatApp Clone Website",
    description: "An Whatsapp like clone website designed using Redux and Database , authentication using Firebase.",
    image: "/projects/whatappClone.png",
    tech: ["Redux", "Firebase"],
    github: "https://github.com/GHAGDEEPPRAVIN/DG-REDUX/tree/main/Redux-Firebase/WhatApp",
    viewLive: "",
  },
  {
    title: "Movie Management System",
    description:
      "MERN-based system to manage movies with full CRUD operations.",
    image: "/projects/movie.png",
    tech: ["MERN"],
    github:
      "https://github.com/GHAGDEEPPRAVIN/DG-NODE/tree/main/Movie_Management_System",
  },
  {
    title: "Todo App",
    description:
      "React + Redux + Express app for managing tasks efficiently.",
    image: "/projects/todo.png",
    tech: ["React Js", "Redux", "Express Js"],
    github:
      "https://github.com/GHAGDEEPPRAVIN/DG-NODE/tree/main/Express/Todo_App",
  },
  {
    title: "Library Management System",
    description:
      "System to manage books, users, and transactions using Firebase.",
    image: "/projects/lms.png",
    tech: ["React Js", "Redux", "Firebase"],
    github:
      "https://github.com/HETVI1405/library-management-system/tree/main/library_management",
  },
];

export default function Work() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.flatMap((p) => p.tech)),
  ];

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <section className="w-full min-h-screen bg-[#020617] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                active === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-600 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 translate-y-full group-hover:translate-y-0 transition duration-500 flex flex-col justify-center p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-indigo-400 hover:text-white text-sm"
                    >
                      GitHub →
                    </a>
                  )}

                  {project.viewLive && (
                    <a
                      href={project.viewLive}
                      target="_blank"
                      className="text-green-400 hover:text-white text-sm"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}