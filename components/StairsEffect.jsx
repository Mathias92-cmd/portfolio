"use client";

import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import Stairs from "./Stairs";


const StairEffect = () => {
    const pathname = usePathname();
    return ( <>
    return <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-48 flex">
            <Stairs />
            </div>
        </div>
    </AnimatePresence>
    </>
    );
};

export default StairEffect;