"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: FaPhoneAlt,
        title: "Téléphone",
        value: "+33 6 51 47 63 78"
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
                    <div className="w-full xl:w-[50%] xl:h-[700px] flex flex-col xl:justify-between order-2 xl:order-none bg-[#282829] p-6 rounded-xl">
                        <div className="text-6xl leading-none font-extrabold text-outline">
                            Contact
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            Envoyez moi un message
                        </h2>
                        <p className="text-white/60 mt-4">
                            Vous avez une question ou un projet à me proposer ?  N&#39;hesitez pas à me contacter !
                        </p>
                        <form action="https://formspree.io/f/mqkwlzqk" method="POST" className="mt-4">
                            <div className="flex flex-col gap-4">
                                <Input type="text" name="name" placeholder="Nom" required />
                                <Input type="email" name="email" placeholder="Email" required />
                                <Input type="text" name="subject" placeholder="Sujet" required />
                                <Textarea name="message" placeholder="Message" required />
                                <button type="submit" className="w-full bg-accent text-white py-2 rounded-md hover:bg-accent-dark transition-all duration-300">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-1 xl:order-none bg-[#282829] p-6 rounded-xl">
                        <div className="text-6xl leading-none font-extrabold text-outline mb-4">
                            Informations personnelles
                        </div>
                        <div className="flex flex-col gap-4">
                            {info.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <item.icon className="text-accent text-3xl" />
                                    <div>
                                        <h3 className="text-white">{item.title}</h3>
                                        <p className="text-white/60">{item.value}</p>
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