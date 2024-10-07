"use client";

import {faHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaHtml5, FaPython, FaPhp} from 'react-icons/fa';

import { SiTailwindcss , SiNextdotjs } from "react-icons/si";

const about = {
    title: "About Me",
    description: "Lorem",
    info: [
        {
            fieldName: "Name",
            fielValue: "Morel Mathias"
        },
        {
            fieldName: "Phone",
            fielValue: "(+33) 6 35 29 22 18"
        },
        {
            fieldName: "GitHub",
            fielValue: "Mathias92-cmd"
        },
        {
            fieldName: "Nationalité",
            fielValue: "Française"
        },
        {
            fieldName: "Email",
            fielValue: "mathias_morel@ens.univ-artois.fr"
        },
        {
            fieldName: "Langages",
            fielValue: "Anglais / Espagnol",
        },
    ]
};

const experience = {
    icon: "👨‍💻",
    title: "Experience",
    description: "Lorem",
    items: [
        {
            etablissement: "Université de Lens",
            poste: "Etudiant en BUT informatique",
            date: "2023 - Present",
        },
        {
            etablissement: "Lycee Henri Darras",
            poste: "Baccalauréat technologique sciences et technologies de l'industrie et du développement durable ( option SIN )",
            date: "2021 - 2023",
        },
        {
            etablissement: "College Anita Conti",
            poste: "Brevet des collèges",
            date: "2017 - 2021",
        }
    ]
};

const skills = {
    icon: "🛠",
    title: "Skills",
    description: "Lorem",
    skillList: [
        {
            icon: <FaHtml5 />,
            title: "HTML"
        },
        {
            icon: <FaCss3 />,
            title: "CSS"
        },
        {
            icon: <FaPython />,
            title: "Python"
        },
        {
            icon: <FaPhp />,
            title: "PHP"
        },
        {
            icon: <FaReact />,
            title: "React"
        }
    ]
};


const Resume = () => {
    return <div> Resume page</div>;
};

export default Resume;