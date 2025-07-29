import HeroImg from "../assets/img1.png";
import "./HomePage.css";
import ProjectCard from "./CardCom.jsx";
import { TypeAnimation } from "react-type-animation";
import ExperienceCard from "./ExperienceCard.jsx";
import CodingProfileCard from "./CodingProfileCard";
import { projects, experienceData, codingProfiles } from "./Data.jsx";

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
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 flex flex-wrap justify-center items-center gap-2">
            Hi, I'm Aman,&nbsp;
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
              className="text-white"
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

          <button className="mt-6 px-6 py-2 border cursor-pointer border-white rounded-lg hover:bg-white hover:text-black transition-all">
            Show my work →
          </button>
        </div>

        <div className="relative z-20 p-4 sm:p-6 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mx-10 sm:mx-50 md:mx-30 lg:mx-40 mt-12">
          <div className="flex flex-col justify-center gap-4">
            <img
              src={HeroImg}
              alt="Project Preview"
              className="select-none pointer-events-none rounded-xl w-full max-w-[500px] h-auto object-contain mx-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div className="flex flex-col justify-around gap-6 z-20">
            <div className="bg-[#0d0c1b] p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <p className="text-sm text-gray-400">
                    I constantly try to improve
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
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

            <div className="flex flex-row md:flex-rpw bg-[#0d0c1b] p-4 z-20 sm:p-6 rounded-2xl shadow-lg gap-4 md:gap-6">
              <div className="grid grid-rows-2 gap-4 flex-1 justify-between items-center">
                <div className="bg-[#1c1b2a] py-2 px-1 text-white rounded-md text-center font-medium">
                  <i class="ri-tools-line"></i> Problem Solver
                </div>
                <div className="bg-[#1c1b2a] py-2 px-1 rounded-md text-white text-center font-medium">
                  <i class="ri-team-line"></i> Team-Oriented
                </div>
              </div>

              <div className="flex-3/8 flex items-center z-20">
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-white leading-relaxed">
                  I prioritize client collaboration, fostering open
                  communication to deliver reliable & impactful sol<sup>n</sup>.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-fit bg-[#030318] text-white overflow-hidden  z-20">
        <div className="absolute inset-0 z-0"></div>
        <div className="absolute inset-0 mask-gradient-bottom z-[0] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center  z-20">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://media.licdn.com/dms/image/v2/C5612AQE2ou8wVmnF6Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1589656166566?e=2147483647&v=beta&t=Uc9SxgcluEP_FPHMJHsoSQwuPFWkS961ZQo4Jdz9FOw"
              alt="Full Stack Illustration"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl pointer-events-none select-none rounded-2xl "
              draggable="false"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              What<span className="text-purple-400"> I Do ?</span>
            </h2>

            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                Full Stack Development
                <span className="flex gap-2 font-light text-3xl">
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
                  Building responsive website frontends using React, Redux, and
                  Node.js
                </li>
                <li>
                  Developing full web applications using HTML, CSS, and
                  JavaScript
                </li>
                <li>
                  Designing and implementing RESTful backend APIs using Node.js,
                  Express.js, and MongoDB
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
      </section>

      <section className="relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text4xl sm:text-5xl font-bold mb-15 text-center">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-15 gap-x-10">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-30">
          <h2 className="text4xl sm:text-5xl font-bold mb-15 text-center">
            My{" "}
            <span className="text-purple-400">
              Experience <span className="text-white">&</span> Milestones
            </span>
          </h2>
          <div className="flex flex-wrap gap-y-10 gap-x-6 justify-center mt-10">
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
      </section>

      <section className="relative w-full h-fit bg-[#030318] text-white overflow-hidden px-4 py-10 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-30">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
            My <span className="text-purple-400">Coding Profiles</span>
          </h2>
          <div className="flex flex-wrap gap-y-10 gap-x-6 justify-center mt-10 text-center items-center ">
            {codingProfiles.map((profile, i) => (
              <CodingProfileCard key={i} {...profile} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
