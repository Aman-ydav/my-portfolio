import HeroImg from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import "./HomePage.css";
import ProjectCard from "./CardCom.jsx";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard.jsx";
import CodingProfileCard from "./CodingProfileCard";
import { projects, experienceData, codingProfiles } from "./Data.jsx";
import { motion } from "framer-motion";


function HomePage() {
  return (
    <>

      <section className="relative w-full min-h-screen bg-[#030318] text-white overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[300px] bg-purple-600 opacity-60 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern mask-gradient-bottom z-0 pointer-events-none" />

        <div className="relative z-20 flex flex-col justify-center items-center text-center pt-20 px-4">
          <h1 className="max-w-[900px] text-4xl sm:text-5xl md:text-7xl font-bold mt-10">
            Code is the tool,
            <span className="text-purple-400"> solving problems</span> is the
            goal.
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-2xl text-gray-300 mt-6 flex flex-wrap justify-center items-center gap-2 text-center leading-relaxed">
            Hi, I'm Aman,
            <TypeAnimation
              sequence={[
                "a Software Developer based in India.",
                3000,
                "a problem solver by passion",
                3000,
                "a lifelong learner ",
                3000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-white inline-block"
            />
          </p>

          <div className="flex items-center gap-5 mt-8 text-white text-3xl">
            <a
              href="https://github.com/Aman-ydav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <i className="devicon-github-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aman--yadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="mailto:amanyadav923949@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <i className="ri-mail-line"></i>
            </a>
            <a
              href="https://leetcode.com/u/Aman-ydav/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <i className="ri-code-s-slash-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/aman_ydav.01/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>

          <a href="#projects">
            <button className="mt-6 px-6 py-2 border border-purple-500 cursor-pointer rounded-lg hover:bg-white hover:text-black transition-all">
              Show my work →
            </button>
          </a>
        </div>
        <div className="relative z-20 p-4 sm:p-6 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mx-5 sm:mx-50 md:mx-50 lg:mx-50 mt-12">
          <div className="flex flex-col justify-start items-start gap-4">
            <img
              src={HeroImg}
              alt="Project Preview"
              className="select-none pointer-events-none rounded-xl w-full max-w-[500px] h-auto object-contain mx-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col justify-around gap-6 z-20 m-auto">
              <div className="bg-[#0d0c1b] p-3 rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row md:flex-row justify-between gap-3 items-center">
                  <div className="flex flex-col gap-2 sm:gap-4 ml-5">
                    <p className="text-xs md:text-xs text-gray-400">
                      I constantly try to improve
                    </p>
                    <h2 className="text-lg sm:text-lg md:text-xl font-bold text-white">
                      My Tech Stack
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                      <i class="ri-reactjs-line"></i> ReactJS
                    </span>
                    <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                      <i class="ri-nodejs-fill"></i> NodeJS
                    </span>
                    <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                      <i class="ri-leaf-fill"></i> MongoDB
                    </span>
                    <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                      <i class="ri-javascript-fill"></i> JavaScript
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row bg-[#0d0c1b] p-4 z-20 sm:p-6 rounded-2xl shadow-lg gap-4 md:gap-6">
                <div className="grid grid-cols-2 md:grid-rows-2 flex-1 gap-3 justify-between items-center">
                  <div className="bg-[#1c1b2a] py-2 px-4 text-white rounded-md text-center text-md md:text-md font-medium">
                    <i class="ri-settings-3-line"></i> Optimizer
                  </div>
                  <div className="bg-[#1c1b2a] py-2 px-3 rounded-md text-white text-center text-md md:text-md font-medium">
                    <i class="ri-lightbulb-flash-line"></i> Innovator
                  </div>
                </div>

                <div className="flex-3/11 flex items-center z-20">
                  <h3 className="text-sm sm:text-sm md:text-[17px] font-semibold text-white leading-relaxed text-center">
                    I prioritize client collaboration, fostering open
                    communication to deliver reliable & impactful solution.
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full min-h-fit bg-[#030318] text-white overflow-hidden  z-20">
        <div className="absolute inset-0 z-0"></div>
        <div className="absolute inset-0 mask-gradient-bottom z-[0] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center  z-20">
            <div className="flex justify-center md:justify-start">
              <img
                src={Img2}
                alt="Full Stack Illustration"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl pointer-events-none select-none rounded-2xl "
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white text-center md:text-left">
                What<span className="text-purple-400"> I Do ?</span>
              </h2>

              <div>
                <h3 className="text-xl  md:text-2xl font-semibold flex items-center gap-3">
                  Full Stack Development
                  <span className="flex gap-2 font-light text-xl md:text-3xl">
                    <i class="ri-html5-line"></i>
                    <i class="ri-tailwind-css-fill"></i>
                    <i class="ri-javascript-line"></i>
                    <i class="ri-reactjs-fill"></i>
                    <i class="ri-nodejs-fill"></i>
                    <i class="ri-nextjs-fill"></i>
                    <i class="ri-leaf-line"></i>
                  </span>
                </h3>
                <ul className="mt-3 text-base space-y-2 text-white/80 list-disc list-inside">
                  <li>
                    Building responsive website frontends using React, Tailwind,
                    JavaScript, and Node.js
                  </li>
                  <li>
                    Designing and implementing RESTful backend APIs using
                    Node.js, Express.js, and MongoDB
                  </li>
                  <li>
                    Integrating secure user authentication and data management
                    using JWT and MongoDB
                  </li>
                </ul>
              </div>

              <div className="mt-8 opacity-40 italic text-sm">
                More to come...
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-15 text-center">
              My <span className="text-purple-400">Projects</span>
            </h2>
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-18 gap-x-8">
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="experience"
        className="flex justify-center items-center relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
              My{" "}
              <span className="text-purple-400">
                Experience <span className="text-white">&</span> Milestones
              </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-y-10 gap-x-6 mt-10">
              {experienceData.map((exp, i) => (
                <ExperienceCard
                  key={i}
                  icon={exp.icon}
                  title={exp.title}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="coding"
        className="flex justify-center items-center relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
              My <span className="text-purple-400">Coding Profiles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {codingProfiles.map((profile, i) => (
                <CodingProfileCard key={i} {...profile} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="bg-[#030318] text-white px-6 py-16 md:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-3xl">
            Ready to take <span className="text-purple-400">your</span> digital
            presence to the next level?
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl text-base md:text-lg">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>

          <a
            href="mailto:amanyadav923949@gmail.com"
            className="mt-8 inline-flex items-center px-6 py-3 border border-purple-500 text-white rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Let’s get in touch <span className="ml-2">🡥</span>
          </a>

          <div className="mt-12 flex items-center gap-4 justify-center">
            <a
              href="https://github.com/Aman-ydav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="t.me/aman_ydav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <FaPaperPlane className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman--yadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-500">
            Copyright © 2025 Aman Yadav
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default HomePage;
