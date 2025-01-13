import React, { useEffect, useRef } from "react";

const AboutMe = () => {
  const skillBarRef = useRef(null);

  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar .progress-bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");
            setTimeout(()=>{
              bar.style.width = width;

            },500)
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-neutral-900 p-12 "name="About">
      <div className="space-y-6 animate__animated animate__fadeInLeft">
        <div className="bg-neutral-700 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate MERN Stack Developer with a strong foundation in
            web development. Fresh out of college, I bring enthusiasm and
            modern development practices to every project I undertake.
          </p>
        </div>

        <div className="bg-neutral-700 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting with HTML and CSS, I gradually mastered JavaScript and
            dove deep into the MERN stack. Through personal projects and
            continuous learning, I've developed a keen eye for creating
            efficient and scalable web solutions.
          </p>
        </div>

        <div className="bg-neutral-700 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">My Goals</h3>
          <p className="text-gray-300 leading-relaxed">
            I aim to create impactful web applications that solve real-world
            problems. Continuously learning and adapting to new technologies
            drives my professional growth.
          </p>
        </div>
      </div>

      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-700 p-8 rounded-lg space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Tech Stack &amp; Skills
          </h3>

          <div className="space-y-4">
            {[
              { skill: "MongoDB", percentage: "85%" },
              { skill: "Express.js", percentage: "80%" },
              { skill: "React.js", percentage: "90%" },
              { skill: "Node.js", percentage: "85%" },
            ].map((item, index) => (
              <div className="skill-bar" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-white">{item.skill}</span>
                  <span className="text-blue-400">{item.percentage}</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full progress-bar"
                    style={{
                      transition: "width 10s ease-in-out",
                    }}
                    data-width={item.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
