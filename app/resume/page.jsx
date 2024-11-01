"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaPhp , FaLinux , FaLaravel , FaJava} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJetbrains , SiFlask } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const about = {
    title: "About Me",
    description: "Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus.",
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
            fielValue: "Anglais (B2) / Espagnol (A2)",
        },
    ]
};

/*
    * Experience data
 */
const experience = {
    icon: "👨‍💻",
    title: "Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus.",
    items: [
        {
            etablissement: "Université de Lens",
            poste: "Etudiant en BUT informatique",
            date: "2023 - Present",
        },
        {
            etablissement: "Université de Lens",
            poste: "Travail sur un projet de développement d'application en java",
            date: "2023",
        },
        {
            etablissement: "Udemy",
            poste: "Formation en Python",
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
        },
    ]
};

/**
 * Skills data
 * @type {{icon: string, title: string, description: string, skillList: {icon: JSX.Element, title: string}[]}}
 */
const skills = {
    icon: "🛠",
    title: "Skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML"
        },
        {
            icon: <FaCss3 />,
            name: "CSS"
        },
        {
            icon: <FaJava />,
            name: "Java"
        } ,
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <FaPhp />,
            name: "PHP"
        },
        {
            icon: <BiLogoPostgresql />,
            name: "PostgreSQL"
        },
        {
            icon: <FaLinux />,
            name: "Linux"
        },
        {
            icon: <FaLaravel />,
            name: "Laravel"
        },
        {
            icon: <SiJetbrains />,
            name: "IntelliJ"
        },
        {
            icon: <SiFlask />,
            name: "Flask"
        },
        {
            icon: <SiGnubash />,
            name: "Bash"
        },
        {
            icon: <VscVscode />,
            name: "VSCode"
        }
    ]
};

/**
 * Resume component
 * @returns {JSX.Element}
 * @constructor
 */
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
        >
            <div className="container mx-auto mt-[50px]">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col gap-[20px]"
                >
                    <TabsList className="flex w-full justify-center gap-6 items-center flex-row">
                        <TabsTrigger className="p-3 text-base " value="experience">Experience</TabsTrigger>
                        <TabsTrigger className="p-3 text-base" value="skills">Skills</TabsTrigger>
                        <TabsTrigger className="p-3 text-base" value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="experience" className="w-full mt-6">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-semibold text-accent">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="timeline">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="timeline-item">
                                                <div className="timeline-icon"></div>
                                                <div className="timeline-content">
                                                    <span className="text-accent">{item.date}</span>
                                                    <h3>{item.poste}</h3>
                                                    <p>{item.etablissement}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full mt-6 text-accent">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left mb-6">
                                <h3 className="text-4xl font-semibold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {skills.skillList.map((skill, index) => (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#262629] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="about" className="w-full mt-6 text-accent">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left mb-6">
                                <h3 className="text-4xl font-semibold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[980px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4 bg-[#262629] rounded-xl p-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl whitespace-nowrap">{item.fielValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;