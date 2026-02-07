//Education section

import aktu from "./assets/Education_Logo/AKTU.png";
import KIET from "./assets/Education_Logo/KIET.png";
import SBN from "./assets/Education_Logo/SBN.jpeg"

//Tech Section
import bootstrap from "./assets/Tech_Logo/bootstrap.png";
import c from "./assets/Tech_Logo/c.png";
import css from "./assets/Tech_Logo/css.png";
import express from "./assets/Tech_Logo/express.png";
import git from "./assets/Tech_Logo/git.png";
import github from "./assets/Tech_Logo/github_det.png";
import html from "./assets/Tech_Logo/html.png";
import java from "./assets/Tech_Logo/java.png";
import mc from "./assets/Tech_Logo/mc.png";
import mongodb from "./assets/Tech_Logo/mongodb.png";
import mysql from "./assets/Tech_Logo/mysql.png";
import netlify from "./assets/Tech_Logo/netlify.png";
import nextjs from "./assets/Tech_Logo/nextjs.png";
import nodejs from "./assets/Tech_Logo/nodejs.png";
import postman from "./assets/Tech_Logo/postman.png";
import python from "./assets/Tech_Logo/python.png";
import reactjs from "./assets/Tech_Logo/reactjs.png";
import redux from "./assets/Tech_Logo/redux.png";
import tailwindcss from "./assets/Tech_Logo/tailwindcss.png";
import typescript from "./assets/Tech_Logo/typescript.png";
import vercel from "./assets/Tech_Logo/vercel.png";
import vscode from "./assets/Tech_Logo/vscode.png";
import javascript from "./assets/Tech_Logo/javascript.png";
import materialui from "./assets/Tech_Logo/materialui.png";

import Video from "./assets/Work_Logo/Video_Api.png"
import weather from "./assets/Work_Logo/weather.png";
import AIImage from "./assets/Work_Logo/AIImage.png"

export const SKillInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: javascript },
      { name: "React JS", logo: reactjs },
      { name: "Redux", logo: redux },
      { name: "Next JS", logo: nextjs },
      { name: "Tailwind", logo: tailwindcss },
      { name: "BootStrap", logo: bootstrap },
      { name: "MaterialUI", logo: materialui },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejs },
      { name: "Express JS", logo: express },
      { name: "MySQL", logo: mysql },
      { name: "MongoDB", logo: mongodb },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: c },
      { name: "Java", logo: java },
      { name: "Python", logo: python },
      { name: "JavaScript", logo: javascript },
      { name: "TypeScript", logo: typescript },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "Github", logo: github },
      { name: "VS Code", logo: vscode },
      { name: "Postman", logo: postman },
      { name: "Compass", logo: mc },
      { name: "Vercel", logo: vercel },
      { name: "Netlify ", logo: netlify },
    ],
  },
];

export const education = [
  
  {
    id: 1,
    img: KIET,
    school: "Kiet Group of Institutions, Ghaziabad",
    date: "Sept 2023 - July 2027",
    grade: "8.54 CGPA",
    desc: "I am pursuing Bachelor of Technology (Computer Science) from KIET College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. ",
    degree: "Bachelor of Technology (Computer Science)",
  },
  {
    id: 2,
    img: SBN,
    school: "SBN Public School Nandgram",
    date: "Apr 2022 - March 2023",
    grade: "90.2%",
    desc: "I completed my class 12 education from SBN Public School, Nandgram, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "CBSE(XII) - PCM ",
  },
  {
    id: 3,
    img: SBN,
    school: "SBN Public School Nandgram, Ghaziabad",
    date: "Apr 2020 - March 2021",
    grade: "77.5%",
    desc: "I completed my class 10 education from SBN Public School, Nandgram, under the CBSE board, where I studied Science ",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 1,
    title: "Check Weather",
    description:
      "Check Weather is a responsive web application that provides real-time weather information for any city across the globe. Users can instantly view current temperature, weather conditions, humidity, wind speed, and location-based forecasts through a simple and intuitive interface. The app fetches live data from a weather API and presents it in a visually appealing UI, making it easy to track climate conditions while traveling or planning daily activities.",
    image: weather,
    tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/YAbhinavZ/Check_Weather",
    webapp: "https://check-weather-ruddy.vercel.app/",
  },
  {
    id: 2,
    title: "Video Streaming Backend API",
    description:
      "A scalable backend system for uploading and streaming video content efficiently using chunk-based delivery and RESTful APIs. Designed with modular architecture to handle large media files, optimize performance, and support future frontend integration.",
    image: Video, // replace with your imported image variable
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "Video Streaming", "File Handling"],
    github: "https://github.com/YAbhinavZ/video-streaming-backend",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description:
      "An intelligent image generation application powered by AI models that transforms text prompts into high-quality visual content. Features intuitive prompt engineering, multiple style options, and seamless image management for creative workflows.",
    image: AIImage, // replace with your imported image variable
    tags: ["React", "AI/ML", "Leonardo AI", "Image Generation", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/YAbhinavZ/ai-image-frontend",
    webapp : "https://ai-image-frontend-phi.vercel.app/"
  }

  
  
]
  