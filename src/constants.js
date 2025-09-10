// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import rLogo from './assets/tech_logo/r.png'; 
import supabaseLogo from './assets/tech_logo/supabase.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      //{ name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
     // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     // { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Supabase', logo: supabaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
     // { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
     // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'R', logo: rLogo }, // R logo

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// Project Section Logo's


import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import realestates from './assets/work_logo/realestates.png';
import sahayakai from './assets/work_logo/sahayak_ai.png';
import tcsion from './assets/work_logo/tcs ion rio45.png';
import zenev from './assets/work_logo/zenev.png';


 export const projects = [
    {
      id: 0,
      title: "Estate – Modern Real Estate Landing Page",
      description:
        "A clean and responsive real estate landing page designed to help users explore housing projects that match their dreams. Built with a modern UI, the page features intuitive navigation, bold typography, and engaging call-to-action buttons like Projects and Contact Us. Perfect for showcasing real estate portfolios, property listings, and client testimonials with a professional and elegant design.",
      image: realestates,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      github: "https://github.com/R-Raghav30/Real-Estate-Website",
      webapp: "https://real-estates-web.netlify.app/",
    },
    {
      id: 1,
      title: "Sahayak AI Teaching Assistant",
      description:
        "Sahayak is an AI-powered teaching assistant designed for Indian educators, offering intelligent tools to simplify classroom management and lesson delivery. It enables teachers to instantly generate culturally relevant lessons, quizzes, and smart worksheets, while also providing visual aids, audio assessments, and a knowledge base for quick explanations. By automating repetitive tasks and supporting multi-grade classrooms, Sahayak helps educators save valuable time and create more engaging and effective learning experiences for students.",
      image: sahayakai,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "API", "JavaScript"],
      github: "https://github.com/TheCoreFifer/sahayak",
      webapp: "https://sahayak-agentic-ai.web.app/",
    },
    {
      id: 2,
      title: "CAPTCHA Service – TCS iON RIO 45",
      description:
        "Developed a secure web-based CAPTCHA service as part of the TCS iON RIO 45 project to protect applications from automated bots. The project features a user-friendly interface with form validation and CAPTCHA integration, ensuring enhanced security and preventing unauthorized access.",
      image: tcsion,
      tags: [ "HTML", "CSS", "Java", "JavaServlet"],
      github: "https://github.com/R-Raghav30/TCS-RIO-45-CAPTCHA",
      
    },
    {
      id: 3,
      title: "ZEN-EV – EV Charging Network Platform",
      description:
        "ZEN-EV is a modern web platform built to showcase and promote the largest EV charging network in India. The platform emphasizes the benefits of electric mobility, provides details on partnerships, and offers users easy access to charging solutions. By connecting stakeholders and highlighting opportunities, ZEN-EV encourages collaboration and supports the rapid adoption of electric vehicles across the nation.",
      image: zenev,
      tags: ["React JS", "Node.js", "API", "Tailwind CSS"],
      github: "https://github.com/R-Raghav30/ZEN-EV",
      webapp: "https://zen-ev.netlify.app/",
    },
    /*{
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  