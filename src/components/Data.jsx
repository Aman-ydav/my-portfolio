const projects = [
    {
      title: "Spark Student Organization Website",
      description:
        "Official website for Spark student organisation featuring events, blog, and a Node.js-based join form.",
      imageUrl: "src/assets/img3.png",
      techStack: [
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-javascript-plain colored",
        "devicon-figma-plain colored",
        "devicon-nodejs-plain colored",
        "devicon-express-original",
        "devicon-mongodb-plain colored",
      ],

      link: "https://spark-lpu.onrender.com",
    },
    {
      title: "Virtual Zoo",
      description:
        "A creative and educational virtual zoo platform where users can explore animal facts and habitats interactively.",
      imageUrl: "src/assets/img5.png",
      techStack: [
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-javascript-plain colored",
      ],
      link: "https://virtual-zoo-app.vercel.app",
    },
    {
      title: "Diabetes Predictor",
      description:
        "Maching Learning based tool that predicts diabetes risk using real data and user health metrics.",
      imageUrl: "src/assets/img6.png",
      techStack: [
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-javascript-plain colored",
        "devicon-python-plain colored",
        "devicon-fastapi-plain colored",
      ],
      link: "https://diabetes-prediction-beta.vercel.app",
    },
    {
      title: "Fleet Management System",
      description:
        "PHP-based system with login, driver tracking, and vehicle allocation for managers",
      imageUrl: "src/assets/img4.png",
      techStack: [
        "devicon-html5-plain colored",
        "devicon-tailwindcss-plain colored",
        "devicon-javascript-plain colored",
        "devicon-php-plain colored",
        "devicon-mysql-plain-wordmark colored",
      ],
      link: "https://fleet-pro.infinityfreeapp.com",
    },
  ];

  const Projects = () => {
    const renderProjects = () => {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      );
    };
  };

const experienceData = [
  {
    icon: "src/assets/exp2.png",
    title: "Lifelong Learner & Tech Explorer",
    description:
      "Consistently upskilling in MERN stack and DSA. Actively solving LeetCode problems and contributing to open-source projects while building a strong software engineering foundation.",
  },
  {
    icon: "src/assets/exp5.png",
    title: "Technical Head – SPARK",
    description:
      "Led the technical division of SPARK, a student-run tech organization. Mentored junior developers, organized technical events, and spearheaded internal project development to build a collaborative learning ecosystem.",
  },
  {
    icon: "src/assets/exp4.png",
    title: "1st Runner-Up – Neural Nexus Hackathon",
    description:
      "Secured the 2nd position at Neural Nexus, under Cognitia’25 (LPU). Developed an AI-driven solution in a 24-hour national-level hackathon, competing among top-tier student innovators.",
  },
  {
    icon: "src/assets/exp1.png",
    title: "Web Developer",
    description:
      "Developed dynamic websites and full-stack applications for clients using React, Node.js, and PHP. Ensured optimal performance and responsiveness tailored to client needs.",
  },
  
];

const codingProfiles = [
  {
    icon: "src/assets/code1.png",
    title: "LeetCode",
    description: "Solved over 105 questions with a streak of 60 days.",
  },
  {
    icon: "src/assets/code2.png",
    title: "GeeksforGeeks",
    description:
      "Institute Rank 5640, solved 90 questions with a streak of 0 days.",
  },

];


export {projects,experienceData,codingProfiles};