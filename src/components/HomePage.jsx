import HeroImg from "../assets/img1.png";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#030318] text-white overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[300px] bg-purple-600 opacity-60 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern mask-gradient-bottom z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center pt-20 px-4">
          <h1 className="max-w-[900px] text-4xl sm:text-5xl md:text-7xl font-bold mt-10">
            Code is the tool, solving problems is the goal.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6">
            Hi, I'm Aman, a Software Developer based in India.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
            Show my work →
          </button>
        </div>

        <div className="relative z-10 p-4 sm:p-6 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mx-10 sm:mx-50 md:mx-30 lg:mx-40 mt-12">
          <div className="flex flex-col justify-center gap-4">
            <img
              src={HeroImg}
              alt="Project Preview"
              className="select-none pointer-events-none rounded-xl w-full max-w-[500px] h-auto object-contain mx-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div className="flex flex-col justify-around gap-6">
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
                    <i class="ri-nextjs-fill"></i>NextJS
                  </span>
                  <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                    <i class="ri-reactjs-line"></i>ReactJS
                  </span>
                  <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                    <i class="ri-leaf-fill"></i>MongoDB
                  </span>
                  <span className="bg-[#1c1b2a] text-white px-4 py-2 rounded-md text-center font-medium">
                    <i class="ri-nodejs-fill"></i> NodeJS
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-rpw bg-[#0d0c1b] p-4 sm:p-6 rounded-2xl shadow-lg gap-4 md:gap-6">
              <div className="grid grid-rows-2 gap-4 flex-1 justify-between items-center">
                <div className="bg-[#1c1b2a] py-3 px-2 text-white rounded-md text-center font-medium">
                  <i class="ri-tools-line"></i>Problem Solver
                </div>
                <div className="bg-[#1c1b2a] py-3 px-2 rounded-md text-white text-center font-medium">
                  <i class="ri-team-line"></i>Team-Oriented
                </div>
              </div>

              <div className="flex-3/8 flex items-center">
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-white leading-relaxed">
                  I prioritize client collaboration, fostering open
                  communication to deliver reliable & impactful sol<sup>n</sup>.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-[#030318] text-white overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
        <div className="absolute inset-0 mask-gradient-bottom z-[0] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              What I Do?
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

            <div className="mt-10 opacity-40 italic text-sm">
              More to come...
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
