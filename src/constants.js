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

import cm from "./assets/Work_Logo/cm.png";
import cs from "./assets/Work_Logo/cs_prep.png"

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
    desc: "I am pursuing Bachelor of Technology (Computer Science) from KIET College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
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
    school: "SBN Public School Govardhan, Mathura",
    date: "Apr 2020 - March 2021",
    grade: "77.5%",
    desc: "I completed my class 10 education from SBN Public School, Govardhan, under the CBSE board, where I studied Science ",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: cs,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cm,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },]
  