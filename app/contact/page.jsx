"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: FaPhoneAlt,
        title: "Téléphone",
        value: "+33 6 35 29 22 18"
    },
    {
        icon: FaEnvelope,
        title: "Email",
        value: "mathias_morel@ens.univ-artois.fr"
    },
    {
        icon: FaMapMarkerAlt,
        title: "Adresse",
        value: "Aix-Noulette, France"
    }
];

const socialLinks = [
    {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/mathias-morel-753951329/"
    },
    {
        icon: FaGithub,
        url: "https://github.com/Mathias92-cmd"
    }
];

const Page = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
                        className="w-full xl:w-[100%] xl:h-[500px] flex flex-col xl:justify-between order-1 xl:order-none p-8 border border-[#a3c4f3] rounded-2xl bg-[#1e1e1e] shadow-lg"
                    >
                        <div className="text-5xl font-bold text-outline mb-8 text-accent">
                            Informations personnelles
                        </div>
                        <div className="flex flex-col gap-6">
                            {info.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1, transition: { delay: index * 0.2, duration: 0.5 } }}
                                    className="flex items-center justify-between p-4 bg-[#282828] rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300"
                                >
                                    <div>
                                        <h3 className="text-accent text-xl font-semibold">{item.title}</h3>
                                        <p className="text-white/70 text-lg">{item.value}</p>
                                    </div>
                                    <item.icon className="text-accent text-5xl" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {/* Section des icônes de réseaux sociaux */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1, duration: 0.8 } }}
                    className="flex gap-8 mt-10 justify-center"
                >
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent text-6xl hover:text-white transition-colors duration-300"
                        >
                            <social.icon />
                        </a>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Page;
