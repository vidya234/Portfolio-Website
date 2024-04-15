import {
  aws,
  css,
  cPlusPlus,
  js,
  ts,
  clouldflare,
  react,
  express,
  nodejs,
  tailwind,
  mongodb,
  postgres,
  html,
  prisma,
  excel,
  powerpoint,


  backend,
  background,
  backgroundproject,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,

  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,

  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,


  searchMd,
  slack,

  telegram,
  twitter,
  footergit,


} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#About",
  },
  {
    id: "1",
    title: "Skills",
    url: "#Skills",
  },
  {
    id: "2",
    title: "Projects",
    url: "#Projects",
  },

  {
    id: "3",
    title: "Experience",
    url: "#Experience",
  },
  // {
  //   id: "4",
  //   title: "Contact",
  //   url: "#Contact",
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];


export const experiences = [
	{
	  id: "0",
	  title: "Designer, Institute Alumni Relations Cell (IARC)",
	  text: "At IIT Roorkee, I actively contributed to the Institute Alumni Relations Cell (IARC) by organizing events like Raionzo and Alumni Career Talks, fostering connections between alumni and the institution.",
	  date: "April 2021- April 2023",
	  status: "done",

	  colorful: true,
	},
	{
	  id: "1",
	  title: "Volunteer (Primary Education Cell), National Service Scheme",
	  text: "As a Primary Education Cell member in NSS IIT Roorkee, I volunteered to help students in rural areas and government schools develop study habits. I organized free coaching classes in Mathematics, Science, Computer, and English for grades 6-10, and used a mobile application to track student progress and provide support.",
	  date: "December 2020 - July 2021",
	  status: "done",
    colorful: true,

	}

  ];



// List 1: Programming Languages
export const programmingLanguages = [
  {
    id: "0",
    title: "C++",
    icon: cPlusPlus,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "JavaScript",
    icon: js,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "TypeScript",
    icon: ts,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "CSS",
    icon: css,
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "HTML",
    icon: html,
    width: 36,
    height: 36,
  },
];

// List 2: Web Technologies
export const webTechnologies = [
  {
    id: "5",
    title: "React",
    icon: react,
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Tailwind CSS",
    icon: tailwind,
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "Node.js",
    icon: nodejs,
    width: 36,
    height: 36,
  },
  {
    id: "8",
    title: "Express",
    icon: express,
    width: 36,
    height: 36,
  },
  {
    id: "9",
    title: "Prisma",
    icon: prisma,
    width: 36,
    height: 36,
  },
  {
    id: "10",
    title: "Cloudflare",
    icon: clouldflare,
    width: 36,
    height: 36,
  },
];

// List 3: Tools and Services
export const toolsAndServices = [
  {
    id: "11",
    title: "AWS",
    icon: aws,
    width: 36,
    height: 36,
  },
  {
    id: "12",
    title: "MongoDB",
    icon: mongodb,
    width: 36,
    height: 36,
  },
  {
    id: "13",
    title: "PostgreSQL",
    icon: postgres,
    width: 36,
    height: 36,
  },
  {
    id: "14",
    title: "Excel",
    icon: excel,
    width: 36,
    height: 36,
  },
  {
    id: "15",
    title: "PowerPoint",
    icon: powerpoint,
    width: 36,
    height: 36,
  },
  {
    id: "16",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "17",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
];





export const Project = [
  {
    id: "0",
    title: "Wallet Web App",
    text: "Developed a secure payment app (like Paytm) leveraging MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Zod, and Mongoose for robust user management and transactions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    gitlink: "https://github.com/vidya234/Paytm-project",
    imageUrl: backgroundproject,
    light: true,
  },
  {
    id: "1",
    title: "Blogging Web App",
    text: "Built a serverless blogging platform similar to Medium using Cloudflare Workers and the Hono framework. Used Prisma for PostgreSQL interactions, Zod for input validation, and JWT for authentication. The front end  React and Tailwind CSS for a modern and responsive UI.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    gitlink: "https://github.com/vidya234/Blogging-website",
    imageUrl: backgroundproject,
    light: true,
  },
  {
    id: "2",
    title: "TO-DO App",
    text: "This project showcases a simple TODO application where users can create new tasks, view their existing todos, and mark tasks as completed.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    gitlink: "https://github.com/vidya234/TO-DO",
    imageUrl: backgroundproject,
    light: true,
  },
  {
    id: "3",
    title: "Portfolio website",
    text: "Designed and developed a responsive modern portfolio website using React, Tailwind CSS.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    gitlink: "https://github.com/vidya234/Blogging-website",
    imageUrl: backgroundproject,
    light: true,
  }
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },

  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },


];
