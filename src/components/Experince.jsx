import React from "react";

const Experience = () => {
  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8 bg-neutral-900 w-full" name="Experince">
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="relative flex md:justify-between items-center md:odd:flex-row-reverse group">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full">
              <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute"></div>
            </div>
            <div className="w-full md:w-5/12 animate__animated animate__fadeInLeft">
              <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Front-End Developer Internship
                  </h3>
                  <span className="text-blue-400">2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-2">IBM Skill</h4>
                <p className="text-gray-400 mb-4">
                  Worked on building user-friendly and responsive web interfaces,
                  collaborating with cross-functional teams, and implementing best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative flex md:justify-between items-center md:odd:flex-row-reverse group">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full">
              <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute"></div>
            </div>
            <div className="w-full md:w-5/12 animate__animated animate__fadeInRight">
              <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Freelance Web Developer
                  </h3>
                  <span className="text-blue-400">2024 - Present</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-2">Self-Employed</h4>
                <p className="text-gray-400 mb-4">
                  Developed and maintained websites for small businesses, focusing on responsive
                  design and user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative flex md:justify-between items-center md:odd:flex-row-reverse group">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full">
              <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute"></div>
            </div>
            <div className="w-full md:w-5/12 animate__animated animate__fadeInLeft">
              <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Web Development Course
                  </h3>
                  <span className="text-blue-400">2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-2">Infosys Springboard</h4>
                <p className="text-gray-400 mb-4">
                  Completed intensive web development bootcamp, building multiple projects and
                  learning modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                    MERN Stack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
