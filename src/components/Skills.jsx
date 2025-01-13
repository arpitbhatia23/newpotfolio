import React, { useEffect } from "react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    ),
    skills: [
      { name: "React.js", percent: 90 },
      { name: "Redux", percent: 85 },
      { name: "Tailwind CSS", percent: 88 },
    ],
    iconBg: "bg-blue-500/10",
    barColor: "bg-blue-500",
  },
  {
    category: "Backend Development",
    icon: (
      <svg
        className="w-8 h-8 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        ></path>
      </svg>
    ),
    skills: [
      { name: "Node.js", percent: 85 },
      { name: "Express.js", percent: 80 },
      { name: "MongoDB", percent: 82 },
    ],
    iconBg: "bg-purple-500/10",
    barColor: "bg-purple-500",
  },
  {
    category: "Tools & Others",
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
    skills: [
      { name: "Git", percent: 85 },
      { name: "GitHub", percent: 88 }, 
      { name: "VS Code", percent: 90 }
    ],
    iconBg: "bg-green-500/10",
    barColor: "bg-green-500",
  },
];

const SkillsSection = () => {
  useEffect(() => {
    const skillProgress = document.querySelectorAll(".skill-progress");
    skillProgress.forEach((skill) => {
      const target = skill.getAttribute("data-target");
      skill.style.width = `${target}%`;
    });
  }, []);

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8 bg-neutral-800 " name="Skills">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-white">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className={`bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div
              className={`flex items-center justify-center h-16 w-16 rounded-full ${skillCategory.iconBg} mx-auto mb-6`}
            >
              {skillCategory.icon}
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              {skillCategory.category}
            </h3>
            <div className="space-y-4">
              {skillCategory.skills.map((skill, i) => (
                <div key={i} className="skill-item" data-skill={skill.name}>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className={`skill-progress h-full ${skillCategory.barColor} rounded-full w-0 transition-all duration-1000`}
                      data-target={skill.percent}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
