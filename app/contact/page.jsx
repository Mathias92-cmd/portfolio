"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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

const Page = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-1 xl:order-none p-6 border border-[#a3c4f3] rounded-xl">
                        <div className="text-6xl leading-none font-extrabold text-outline mb-4 text-accent">
                            Informations personnelles
                        </div>
                        <div className="flex flex-col gap-4">
                            {info.map((item, index) => (
                                <div key={index} className="flex gap-4 items-center p-4 bg-[#1e1e1e] rounded-lg">
                                    <item.icon className="text-accent text-4xl rounded-full bg-[#282829] p-2" />
                                    <div>
                                        <h3 className="text-accent text-2xl">{item.title}</h3>
                                        <p className="text-white/60 text-xl">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Page;