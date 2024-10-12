"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="aboutme">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;