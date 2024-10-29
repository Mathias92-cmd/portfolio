"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Photo component
 * @returns {JSX.Element}
 * @constructor
 */
const Photo = () => {
    return (
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-full overflow-hidden"
            >
                <Image
                    src="/p1ng-removebg-preview.png"
                    priority
                    quality={100}
                    fill
                    alt="Photo"
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
};

export default Photo;
