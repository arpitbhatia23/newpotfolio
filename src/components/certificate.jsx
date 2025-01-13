import React from 'react';

const Certifications = () => {
  // Certification data
  const certificationData = [
    {
      title: "Mern stack",
      provider: "Infosys Springboard",
      skills: ["JavaScript", "React.js","Node.js","Express","MongoDB"],
      link: "#",
    },
    {
      title: "React Basic",
      provider: "HackerRank",
      skills: ["React Basics", "Problem Solving"],
      link: "#",
    },
    {
      title: "Problem Solving",
      provider: "HackerRank",
      skills: ["Algorithm Design", "Logic Building"],
      link: "#",
    },
    {
      title: "Web Development",
      provider: "IBM Skill Build",
      skills: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Project Management Fundamentals",
      provider: "IBM Skill Build",
      skills: ["Team Collaboration", "Project Planning"],
      link: "#",
    },
    {
      title: "Internship Certificate",
      provider: "IBM Skill Build in Collaboration with Crsbox",
      skills: ["Collaboration", "Problem Solving"],
      link: "#",
    },
  ];

  return (
    <div
      className="py-8 bg-neutral-900 mx-auto px-4 sm:px-6 lg:px-8"
      name="Certificates"
    >
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Certifications & Achievements
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationData.map((cert, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg p-6 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              {cert.title}
            </h3>
            <div className="text-gray-400 mb-4 text-center">{cert.provider}</div>
            <div className="border-t border-neutral-700 pt-4">
              <ul className="grid grid-cols-2 text-gray-300">
                {cert.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-teal-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <a
                href={cert.link}
                className="inline-flex items-center text-teal-500 hover:text-teal-400"
              >
                View Certificate
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
