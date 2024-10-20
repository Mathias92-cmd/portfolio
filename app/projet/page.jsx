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

const projects = [
    {
        num: '1',
        category: 'backend',
        title: 'Projet 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['Python', 'Django'],
        image: '/tabBord.PNG',
        github: "https://github.com/Mathias92-cmd/TableauDeBord",
    },
    {
        num: '2',
        category: 'frontend',
        title: 'Projet 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['React', 'TailwindCSS'],
        image: '/',
        github: "",
    },
    {
        num: '3',
        category: 'fullstack',
        title: 'Projet 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['React', 'Node.js', 'Express', 'MongoDB'],
        image: '/',
        github: "",
    },
    {
        num: '4',
        category: 'frontend',
        title: 'Projet 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urna tincidunt luctus. Sed sit amet purus in urn',
        techs: ['React', 'TailwindCSS'],
        image: '/',
        github: "",
    }
]

const Projet = () => {
    const [project, setProject] = useState(projects[0]);

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
                            <Link href={project.github}>
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
                            </Link>
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
                                <div className="w-full h-[500px] relative group flex justify-center items-center bg-blue-500">
                                    <Image src={project.image}
                                           fill
                                           className="object-cover"
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