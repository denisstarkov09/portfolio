import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works"]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "HR SaaS Platform",
        description : "This platform is a community of business and HR leaders, HR practitioners, technologists, entrepreneurs, consultants. In this project, I used React, Node.js, Tailwind CSS and WebRTC. And I implemented the video streaming using WebRTC and Socket.io.",
        tech : [ "React", "Tailwind CSS", "Node", "Express.js", "MongoDB" ],
        code : 'https://github.com/oleksandrStar/hackinghrlab-fr',
        live : 'https://www.hackinghrlab.io/home',
        thumnail : "HR.png",
        featured : true
    },

    {
        title : "ChatGPT TOP 10",
        description : "Discover the best AI writing tools online, including ChatGPT, for powerful and efficient content creation. Boost your writing process with blog ideas generator tool Ai. I used React, Node, GPT-3.5-turbo-16k and Tailwind CSS.",
        tech : [ "Next.js", "Tailwind CSS", "Redux", "Node" ],
        live : 'https://chatgpttop10.com/',
        code: 'https://github.com/oleksandrStar/chatgpttop10',
        thumnail : "chatgpttop10.png",
        featured : true
    },

    {
        title : "Safebear",
        description : "SafeBear is a cross-platform solution that protects its users from internet toxicity using blockchain technology in the web3. I used Sveltekit, Svelte-MUI, Node and Supabase in this project.",
        tech : [ "Sveltekit", "Tailwind CSS", "Web3", "Supabase" ],
        live : 'https://safebear-network.vercel.app/',
        code: 'https://github.com/oleksandrStar/safebear-network',
        thumnail : "safebear.png",
        featured : true
    },

    {
        title : "AI blog Platform",
        description : "This is an AI blog platform was developed using Next.js, Editor.js, OpenAI, ChatGPT, HyGraph and Cloudinary.",
        tech : [ "Next.js", "Editor.js", "ChatGPT", "HyGraph" ],
        live : 'https://ai-blog.com',
        code: 'https://github.com/oleksandrStar/ai-blog',
        thumnail : "aiblog.png",
        featured : true
    },

    {
        title : "VenueBoost Reservation & Management Platform",
        description : "I developed the responsive front-end project and I used React, Node.js, Tailwind CSS and integrated the Stripe to implement the subscription. I used Tailwind Grid to develop the responsive layout.",
        tech : [ "React", "Redux-thunk", "Node", "Stripe" ],
        code : 'https://github.com/oleksandrStar/VenueBoost',
        live : 'https://venueboost.io/',
        thumnail : "venueboost.png"
    },

    {
        title : "Careerly Web App",
        description : "This is a careerly web app to manage the team. You can use this app to get reports at a team level to derive insights into your own performance as a menager.",
        tech : [ "React", "Node", "Tailwind CSS", "Firebase" ],
        live : 'https://www.careerly.app/',
        code: "https://github.com/oleksandrStar/careerly",
        thumnail : "careerlyweb.png"
    },

    {
        title : "Careerly Chrome Extension",
        description : "This is a careerly chrome extension to manage the team. In this project, I implemented the multi page popup window using chrome extension router and implemented firebase google auth, taking the screenshot of current tab.",
        tech : [ "React", "Tailwind CSS", "Firebase", "MV3" ],
        live : 'https://chrome.google.com/webstore/detail/careerly/hggmhgodcnehgieapofeakhkogikkhkl/',
        code: 'https://github.com/oleksandrStar/careerly',
        thumnail : "careerlycextension.png"
    },

    {
        title : "Elixr Landing Page",
        description : "This is a landing page project was developed using GSAP, React and Tailwind CSS. I implemented the 3D animation, text animation and scroll animation using GSAP.",
        tech : [ "GSAP", "React", "Tailwind CSS" ],
        live : 'https://www.elixr.earth/',
        code: "https://github.com/oleksandrStar/elixr-webgl",
        thumnail : "elixr.png"
    },

    {
        title : "Next Generation ChatGPT",
        description : "I developed the next generation ChatGPT app using Next.js and ChatGPT API. In this project, I wrote some pre-defined prompts to help users. And I provide various OpenAI APIs to implement the tokens as much as possible.",
        tech : [ "Next.js", "React", "ChatGPT", "OpenAI" ],
        live : 'https://next-chatbot-rouge.vercel.app/',
        code: 'https://github.com/oleksandrStar/next-chatbot',
        thumnail : "chatbot.png"
    },

    {
        title : "Conversational AI Chatbot",
        description : "I developed the conversational AI chatbot using React, ElevenLabs, three.js and ChatGPT. In this project, I implemented the text-to-speech using ElevenLabs API and used lip sync library to develop the conversational chatbot.",
        tech : [ "React", "ElevenLabs", "Three.js", "ChatGPT" ],
        live : 'https://threejs-animate-chatbot.netlify.app/',
        code: 'https://github.com/oleksandrStar/conversational-chatbot',
        thumnail : "conversationalbot.png"
    },
    
    {
        title : "Arbitrage Trading Bot",
        description : "I developed the arbitrage trading bot using the liqudity of Dex such as Uniswap, Pancakeswap and Sushiswap. I developed this project using React, web3.js, ether.js and solidity.",
        tech : [ "React", "Web3", "Ether.js", "Solidity" ],
        live : 'https://arbitrage-trading-bot.netlify.app/',
        code: 'https://github.com/oleksandrStar/tradingbot',
        thumnail : "tradingbot.png"
    },

    {
        title : "Facility Management System",
        description : "I developed the Facility Management System using React, Node, D3.j and MongoDB. In this project, I implemented the floorplan using d3.js.",
        tech : [ "React", "Node", "D3.js", "MongoDB" ],
        live : 'https://facility-management-system.netlify.app/',
        code: 'https://github.com/oleksandrStar/facility-management-system',
        thumnail : "floorplan.png"
    },

    {
        title : "Sales Sensei",
        description : "This is a sales assistant chatbot was developed using React, Node.js, Tailwind CSS, Salesforce API and Stripe. I integrated the salesforce API to fetch some business data and implemented the subscription using Stripe.",
        tech : [ "React", "Node", "Salesforce", "Stripe" ],
        code : 'https://github.com/oleksandrStar/sales-sensei',
        live : 'https://sales-sensei-delta.vercel.app/',
        thumnail : "salessensei.png"
    },

    {
        title : "3D Configurator Website",
        description : "I developed the 3D configurator website to emulate the room with colors, materials and so on.",
        tech : [ "React", "Three.js", "WebGL", "Tailwind CSS" ],
        live : 'https://github.com/oleksandrStar',
        code: 'https://github.com/oleksandrStar',
        thumnail : "3dconf.png"
    },

    {
        title : "E-Commerce Site",
        description : "This is an e-commerce platform was developed using React and Node.js. In this project, I used MongoDB for a database. And I implement the multi filter function to find the suitable products quickly.",
        tech : [ "React", "Redux", "Node", "Stripe" ],
        code : 'https://github.com/oleksandrStar/my-ecommer',
        live : 'https://atem-ecommerce.netlify.app/',
        thumnail : "ecommerce.png"
    }
    
]