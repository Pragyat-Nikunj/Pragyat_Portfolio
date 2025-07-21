import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAppwrite, SiCloudinary, SiCoursera, SiExpress, SiJupyter, SiKaggle, SiMongodb, SiNextdotjs, SiPostman, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

export const educationTimeline = [
    {
      title: 'B.Tech in Information Technology',
      description: 'Birsa Institute of Technology, Sindri\nCGPA: 8.5 (Till 1st Semester)',
      date: 'Sept, 2023 – Present',
    },
    {
      title: 'Intermediate (12th Grade)',
      description: 'ST Thomas High School\nCBSE | PCM with Computer Science\nScore: 86.6%',
      date: '2021 – 2023',
    },
    {
      title: 'Matriculation (10th Grade)',
      description: 'KD International School\nCBSE Board\nScore: 77.2%',
      date: '2020 – 2021',
    },
  ];

  export const projects = [
    {
      name: "AskForge",
      image: "/projects/askforge.PNG", 
      description: "A modern full‑stack Q&A platform built with Next.js, TypeScript, Appwrite & Tailwind CSS. Features user auth, rich‑text editing, voting, comments and reputation.",
      github: "https://github.com/Pragyat-Nikunj/AskForge",
      live: "https://ask-forge.vercel.app/",
      tech: [<SiNextdotjs />, <SiTypescript />, <SiAppwrite />, <SiTailwindcss />],
    },
    {
      name: "Framely",
      image: "/projects/framely.PNG", 
      description: "A full‑stack platform to upload, transform & share videos/images using Next.js, Cloudinary & Tailwind CSS.",
      github: "https://github.com/Pragyat-Nikunj/Framely",
      live: "https://framely-three.vercel.app/sign-in",
      tech: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />, <SiCloudinary />, <SiPrisma />],
    },
    {
      name: "VidTube",
      image: "/projects/vidtube.PNG", 
      description: "Production‑ready RESTful API for a video‑sharing platform (like YouTube) using Node.js, Express & MongoDB with full auth & dashboard.",
      github: "https://github.com/Pragyat-Nikunj/VidTube",
      live: null,
      tech: [<IoLogoJavascript />, <SiExpress />, <SiMongodb />, <FaNodeJs />],
    },
    {
      name: "Flight Price Prediction",
      image: "/projects/flight_price_pred.PNG", 
      description: "ML‑powered tool predicting flight fares based on airline, departure time, stops & more (Jupyter Notebook).",
      github: "https://github.com/Pragyat-Nikunj/Flight_Price_Prediction",
      live: "https://flight-price-prediction-rrm3.onrender.com/predictdata",
      tech: [<SiJupyter />, <FaPython />],
    },
    {
      name: "FullStack Authentication System",
      image: "/projects/fullstack_auth.PNG", 
      description: "Authentication system with Next.js, Node.js & MongoDB. Includes email verification, JWT, password reset & protected routes.",
      github: "https://github.com/Pragyat-Nikunj/FullStack-Authentication-System",
      live: "https://full-stack-authentication-system-liard.vercel.app/",
      tech: [<SiNextdotjs />, <SiTypescript />, <FaNodeJs />, <SiMongodb />],
    },
    {
      name: "Password Generator",
      image: "/projects/password_gen.PNG", 
      description: "A simple, secure password generator with options for length, symbols, and case, built with React.",
      github: "https://github.com/Pragyat-Nikunj/Password-Generator",
      live: "https://password-generator-eta-hazel-43.vercel.app/",
      tech: [<IoLogoJavascript />, <FaReact />, <SiTailwindcss />],
    },
    {
      name: "Currency Converter",
      image: "/projects/currency_conv.PNG", 
      description: "Real‑time currency converter app using React and a third‑party exchange‑rate API.",
      github: "https://github.com/Pragyat-Nikunj/Currency-Converter",
      live: "https://currency-converter-nine-gilt.vercel.app/",
      tech: [<IoLogoJavascript />, <FaReact />, <SiTailwindcss />],
    },
  ];
  

export const certifications = [
    {
        name: "Postman API Fundamentals",
        link: "https://badgr.com/public/assertions/aoe6USWTReOAow8h9n9NEQ",
        icon: <SiPostman size={50} />,
    },
    {
        name: "Intermediate Machine Learning",
        link: "https://www.kaggle.com/learn/certification/pragyatnikunj/intermediate-machine-learning",
        icon: <SiKaggle size={50} />,
    },
    {
        name: "Google Cybersecurity Professional Certificate",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/JJ7VIK5E2DCU",
        icon: <SiCoursera style={{ color: '#0056D2' }} size={50} />,
    },
    {
        name: "Machine Learning Specialization by DeepLearning.AI",
        link: "https://www.coursera.org/account/accomplishments/specialization/IBUQE6O1Q5Y3",
        icon: <SiCoursera style={{ color: '#0056D2' }} size={50} />,
    }
];


  