import React from "react";
import { TypeAnimation } from "react-type-animation";
import Code from "./Code"; // Ensure the path is correct
import { Button } from "./ui/button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="flex flex-col md:flex-row justify-start gap-2 items-end py-48 p-10 bg-neutral-950 overflow-hidden">
      {/* Introduction Section */}
      <div className="w-full md:w-1/2">
        <pre className="text-left text-5xl sm:text-6xl text-white px-4">
          <span className="block">Hi,I'm</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aurpit Bhatia
          </span>
          {"\n"}
          <h2 className="text-2xl md:text-3xl   text-gray-300 py-4">
            <TypeAnimation
              className="w-full"
              sequence={[
                "Web Enthusiast", 3000, // Show "Web Enthusiast" for 3 seconds
                "Mern Developer", 3000, // Show "MERN DEVELOPER" for 3 seconds
              ]}
              wrapper="div" // Typing animation container
              speed={60} // Typing speed
              repeat={Infinity} // Repeat the animation infinitely
              cursor={true} // Show blinking cursor
            />
          </h2>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl w-full text-center sm:text-left">
  Passionate MERN stack developer crafting{'\n'}modern web experiences
</div>

          <Link  to="Project"> <Button className="bg-blue-700 rounded-full px-6 py-2 mt-4">
            View Projects
          </Button></Link>{" "}
         <Link to="Contact"> <Button
            variant="outline"
            className="bg-transparent border-2 border-blue-700 rounded-full px-6 py-2 mt-4"
          >
            Contact me
          </Button></Link>
        </pre>
      </div>

      {/* Code Component Section */}
      <div className="relative w-full md:w-1/2 mt-12 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-[100px] opacity-45 animate-glow"></div>
        <Code />
      </div>
    </div>
  );
};

export default Home;
