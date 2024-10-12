"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {ScrollArea} from "@/components/ui/scroll-area";

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
        }, {
            icon: <FaJs />,
            title: "JavaScript"
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
                        <TabsTrigger className="p-3 text-base" value="experience">Experience</TabsTrigger>
                        <TabsTrigger className="p-3 text-base" value="skills">Skills</TabsTrigger>
                        <TabsTrigger className="p-3 text-base" value="aboutme">About me</TabsTrigger>
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
                                                    <span>{item.date}</span>
                                                    <h3>{item.poste}</h3>
                                                    <p>{item.etablissement}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full mt-6">
                            skills
                        </TabsContent>
                        <TabsContent value="about" className="w-full mt-6">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;