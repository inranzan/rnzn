import img from "../src/assets/ranzan.png";
import hero from "../src/assets/rnzn.jpg";

export const NAV_LINKS = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
    { label: "Github", url: "https://github.com/inranzan" },
    { label: "LinkedIn", url: "https://linkedin.com/in/inranzan" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Mentor Match",
        tags: ["Next JS", "Firebase", "Tailwind"],
        image: img,
        desktopImage: hero,
    },
    {
        id: 2,
        title: "Anotalk",
        tags: ["REACT NATIVE", "EXPRESS", "MONGO DB"],
        image: img,
        desktopImage: hero,
    },
    {
        id: 3,
        title: "Volorg",
        tags: ["MERN", "TAILWINDCSS", "SOCKET.IO"],
        image: img,
        desktopImage: hero,
    },
    {
        id: 4,
        title: "Portfolio",
        tags: ["REACT", "TAILWINDCSS", "MOTION"],
        image: img,
        desktopImage: hero,
    },
];

export const HOME_DATA = {
    tagline: "Cloud Engineering & Fullstack",
    prose: "Building resilient systems with a human touch.",
    portrait: hero,
};

export const MANIFESTO_PARAGRAPHS = [
    "I am Ranjan Kumar, a Computer Science student from Jaipur specializing in Cloud Technology and Cybersecurity. Passionate full-stack developer building impactful solutions for India's unique challenges—from rural farmers to heritage tourists. Creating cross-platform apps that work seamlessly across web, and mobile using clean code and intuitive design.",
    "Mastery in AWS and Google Cloud services including EC2, S3, and RDS alongside complete MERN stack expertise with MongoDB, Express, React, and Node.js. Proficient in React Native for native iOS/Android applications. UI/UX design using Figma creates accessible mobile-first interfaces.",
    "My approach is rooted in deliberate minimalism. I do not write code for the sake of writing code; I engineer systems where every component serves a distinct, justifiable purpose. By stripping away the superfluous, we reduce surface area for errors and create architectures that are naturally resilient.",
];

export const MANIFESTO_SIGNATURE = "— ranzan";
