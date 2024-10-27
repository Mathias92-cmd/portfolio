"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';

/**
 * List of projects
 * @type {[{image: string, github: string, num: string, description: string, category: string, title: string, techs: string[]},{image: string, github: string, num: string, description: JSX.Element, category: string, title: string, techs: string[]},{image: string, github: string, num: string, description: string, category: string, title: string, techs: string[]},{image: string, github: string, num: string, description: string, category: string, title: string, techs: string[]},{image: string, github: string, num: string, description: string, category: string, title: string, techs: string[]}]}
 */
const projects = [
    {
        num: '1',
        category: 'Web app',
        title: 'Projet 1',
        description: 'Projet de tableau de bord réalisé avec Django et TailwindCSS',
        techs: ['Python', 'Django' , 'TailwindCSS'],
        image: '/tab.PNG',
        github: "https://github.com/Mathias92-cmd/TableauDeBord",
    },
    {
        num: '2',
        category: 'frontend',
        title: 'Projet 2',
        description: (
            <>
                Projet de site web réalisé avec HTML, CSS et JavaScript lors du premier semestre de ma formation avec{' '}
                <Link href="https://github.com/BenjaminC62" target="_blank" rel="noopener noreferrer" className="text-accent">
                    BenjaminC62
                </Link>.
            </>
        ),
        techs: ['HTML', 'CSS', 'JavaScript'],
        image: '/viartek.PNG',
        github: "https://github.com/Mathias92-cmd/Viartek",
    },
    {
        num: '3',
        category: 'java',
        title: 'Projet 3',
        description: (
            <>
                Projet de gestionnaire de patient réalisé avec Java et JavaFX lors du deuxième semestre de ma formation avec{' '}
                <Link href="https://github.com/BenjaminC62" target="_blank" rel={"noopener noreferrer"} className="text-accent block mb-2">
                    BenjaminC62
                </Link>
                <Link href="https://github.com/MatheoDalmasso" target="_blank" rel={"noopener noreferrer"} className="text-accent block mb-2">
                    MatheoDalmasso
                </Link>
                <Link href="https://github.com/MatheoDalmasso" target="_blank" rel={"noopener noreferrer"} className="text-accent block mb-2">
                    MatheoDalmasso
                </Link>
                <Link href="https://github.com/Scouille" target="_blank" rel={"noopener noreferrer"} className="text-accent block mb-2">
                    Simon Caillieret
                </Link>
            </>
        ),
        techs: ['Java', 'SceneBuilder', 'JavaFX'],
        image: '/p3.PNG',
        github: "https://github.com/Mathias92-cmd/Gestionnaire-de-Patient-Medecin",
    },
    {
        num: '4',
        category: 'frontend',
        title: 'Projet 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['React', 'TailwindCSS'],
        image: '/',
        github: "",
    },
    {
        num: '5',
        category: 'backend',
        title: 'Projet 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['Node.js', 'Express', 'MongoDB'],
        image: '/',
        github: "",
    },
]

const Projet = () => {
    const [project, setProject] = useState(projects[0]);

    /**
     * Handle slide change
     * @param swiper
     */
    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setProject(projects[currentSlide]);
    }

    return (
        <motion.section initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="text-7xl leading-none font-extrabold text-outline">
                            {project.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.title}
                        </h2>
                        <p className="text-white/60 mt-4">
                            {project.description}
                        </p>
                        <ul className="flex gap-4 mt-4">
                            {project.techs.map((tech, index) => (
                                <li key={index} className="text-accent bg-primary p-2 rounded-md">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="border border-white/20 mt-4 p-2 flex gap-4">
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <Link href={project.title}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Voir le projet
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Voir le code
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="w-full h-[500px] mb-12"
                        onSlideChange={handleSlideChange}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-[500px] relative group flex justify-center items-center ">
                                    <Image src={project.image}
                                           fill
                                           className="object-contain"
                                           quality={100}
                                           alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
};

export default Projet;