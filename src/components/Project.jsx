import React from "react";

const Projects = () => {
  const projectData = [
    {
      name: "School Management",
      description: "Full-stack school management application with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      liveDemoLink: "#",
      iconColor: "text-blue-500",
      iconPath:
        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "Bloodbank Management",
      description: "Real-time bloodbank management system with user registration and donation history",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveDemoLink: "#",
      iconColor: "text-purple-500",
      iconPath:
        "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      name: "Mysterious Messenger (NGL Clone)",
      description: "Anonymous messaging app like NGL with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      liveDemoLink: "#",
      iconColor: "text-green-500",
      iconPath:
        "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
      name: "YouTube Backend",
      description: "Backend API for YouTube clone with Node.js, Express, and MongoDB",
      technologies: ["Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveDemoLink: "#",
      iconColor: "text-red-500",
      iconPath:
        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8 bg-neutral-950 " name="Project">
      <div className="text-center mb-16 animate__animated animate__fadeIn" style={{ visibility: "visible", opacity: 1 }} id="el-h194aewf">
        <h2 className="text-4xl font-bold text-white" id="el-w3m69tpe">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" id="el-bxlfpjhh">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" id="el-qxu8urn8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="el-o5epafg3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-neutral-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.2 * index}s`, visibility: "visible", opacity: 1 }}
          >
            <div className="bg-neutral-800 p-4 h-48 flex items-center justify-center" id="el-ai7x02sr">
              <svg className={`w-20 h-20 ${project.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.iconPath}></path>
              </svg>
            </div>
            <div className="p-6" id="el-88wfvwn4">
              <h3 className="text-xl font-semibold text-white mb-2" id="el-gq93ilag">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4" id="el-8qeuh3d7">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4" id="el-94dvezwi">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 bg-${tech.toLowerCase()}-500/10 text-${tech.toLowerCase()}-400 rounded-full text-sm text-white`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4" id="el-noxoujy2">
                <a href={project.githubLink} className="text-blue-500 hover:text-blue-400 transition-colors" id="el-0wnia21f">
                  <i className="fab fa-github text-xl" id="el-uuk5ff6o"></i> Code
                </a>
                <a href={project.liveDemoLink} className="text-blue-500 hover:text-blue-400 transition-colors" id="el-9nvotr3n">
                  <i className="fas fa-external-link-alt text-xl" id="el-19abbbr9"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
