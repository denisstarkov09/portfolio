import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "HR SaaS Platform",
        description : "This platform is a community of business and HR leaders, HR practitioners, technologists, entrepreneurs, consultants.",
        tech : [ "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB" ],
        code : 'https://github.com/oleksandrStar/hackinghrlab-fr',
        live : 'https://www.hackinghrlab.io/home',
        thumnail : "HR.png",
        featured : true
    },

    {
        title : "DG Team",
        description : "'Dg team' is an company management system. I use this system for front end “Next js, Tailwind CSS, Axios, Redux, Redux-thunk, Formik, Yup, react-query” and for Backend “Node js, Express js, MongoDB, Socket.io, webRtc”",
        tech : [ "Next.js", "Tailwind CSS", "Redux", "Node.js" ],
        live : 'https://dgteam.vercel.app/',
        thumnail : "dg-team.png",
        featured : true
    },

    {
        title : "Safebear",
        description : "SafeBear is a cross-platform solution that protects its users from internet toxicity using blockchain technology in the web3",
        tech : [ "Sveltekit", "Tailwind CSS", "Web3", "Supabase" ],
        live : 'https://www.safebear.com',
        code: 'https://github.com/oleksandrStar/safebear-network',
        thumnail : "safebear.png",
        featured : true
    },

    {
        title : "AI blog Platform",
        description : "This is an AI blog platform was developed using Next.js, Editor.js, OpenAI, ChatGPT, HyGraph and Cloudinary",
        tech : [ "Next.js", "Editor.js", "ChatGPT", "HyGraph" ],
        live : 'https://ai-blog.com',
        code: 'https://github.com/oleksandrStar',
        thumnail : "aiblog.png",
        featured : true
    },

    {
        title : "E-Commerce Site",
        description : "This is an e-commerce platform was developed using React and Node.js. In this project, I used MongoDB for a database.",
        tech : [ "React.js", "Redux", "Node.js", "Stripe" ],
        code : 'https://github.com/oleksandrStar',
        live : 'https://github.com/oleksandrStar',
        thumnail : "ecommer.png"
    },

    {
        title : "Careerly Web App",
        description : "This is a careerly web app to manage the team. You can use this app to get reports at a team level to derive insights into your own performance as a menager.",
        tech : [ "React.js", "Tailwind CSS", "Node.js", "Firebase" ],
        live : 'https://www.careerly.app/',
        code: "https://github.com/oleksandrStar/careerly",
        thumnail : "careerlyweb.png"
    },

    {
        title : "Careerly Chrome Extension",
        description : "This is a careerly chrome extension to manage the team. You can use this extension to report the progress at a team level to derive insights into your own performance as a menager.",
        tech : [ "React.js", "Tailwind CSS", "Firebase", "MV3" ],
        live : 'https://chrome.google.com/webstore/detail/careerly/hggmhgodcnehgieapofeakhkogikkhkl/',
        code: 'https://github.com/oleksandrStar/careerly',
        thumnail : "careerlycextension.png"
    },

    {
        title : "Elixr Landing Page",
        description : "This is a landing page project was developed using GSAP, React and Tailwind CSS. I implemented the 3D animation, text animation and scroll animation using GSAP.",
        tech : [ "GSAP", "React.js", "Tailwind CSS" ],
        live : 'https://www.elixr.earth/',
        code: "https://github.com/oleksandrStar/elixr-webgl",
        thumnail : "elixr.png"
    },

    {
        title : "Facility Management System",
        description : "I developed the Facility Management System using React, Node, D3.j and MongoDB. In this project, I implemented the floorplan using d3.js.",
        tech : [ "React.js", "Tailwind CSS", "Firebase", "MV3" ],
        live : 'https://github.com/oleksandrStar/facility-management-system',
        code: 'https://github.com/oleksandrStar/facility-management-system',
        thumnail : "floorplan.png"
    },

    {
        title : "3D Configurator Website",
        description : "I developed the 3D configurator website to emulate the room with colors, materials and so on.",
        tech : [ "React.js", "Three.js", "WebGL", "Tailwind CSS" ],
        live : 'https://github.com/oleksandrStar',
        code: 'https://github.com/oleksandrStar',
        thumnail : "3dconf.png"
    }
]