import Img3 from "../assets/img3.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img4 from "../assets/img4.png";
import Exp2 from "../assets/exp2.png";
import Exp5 from "../assets/exp5.png";
import Exp4 from "../assets/exp4.png";
import Exp1 from "../assets/exp1.png";
import Code1 from "../assets/code1.png";
import Code2 from "../assets/code2.png";


const projects = [
    {
      title: "Spark Student Club Website",
      description:
        "Official website for Spark student organisation featuring events, team, and a database connected joining form.",
      imageUrl: Img3,
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
        "A creative and educational virtual zoo platform where users can explore different species hologram interactively.",
      imageUrl: Img5,
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
        "ML - based tool that predicts diabetes risk using real data and user health metrics.",
      imageUrl: Img6,
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
      imageUrl: Img4,
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



const experienceData = [
  {
    icon: Exp2,
    title: "Lifelong Learner & Tech Explorer",
    description:
      "Consistently upskilling in MERN stack and DSA. Actively solving LeetCode problems and contributing to open-source projects while building a strong software engineering foundation.",
  },
  {
    icon: Exp5,
    title: "Technical Head – SPARK",
    description:
      "Led the technical Wing of SPARK, a student-run organization at LPU. Mentored junior developers, organized technical events, and spearheaded internal project development to build a collaborative learning ecosystem.",
  },
  {
    icon: Exp4,
    title: "1st Runner-Up – Neural Nexus Hackathon",
    description:
      "Secured the 2nd position at Neural Nexus, under Cognitia’25 (LPU). Developed an AI-driven solution in a 24-hour interUniversity-level hackathon, competing among top student innovators.",
  },
  {
    icon: Exp1,
    title: "Web Developer",
    description:
      "Developed dynamic websites and full-stack applications for clients using React, Node.js, and MongoDB. Ensured optimal performance and responsiveness tailored to client needs.",
  },
  
];

const codingProfiles = [
  {
    icon: Code1,
    title: "LeetCode",
    description: "Solved over 120 questions with a streak of 50 days.",
  },
  {
    icon: Code2,
    title: "GeeksforGeeks",
    description:
      "Institute Rank 5700 , solved 100 questions with a streak of 0 days.",
  },

];


export {projects,experienceData,codingProfiles};