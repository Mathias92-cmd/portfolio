"use client";

import { Sheet , SheetContent , SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';
import {FiDownload} from "react-icons/fi";
import {Button} from "@/components/ui/button";

/**
 * List of links for the mobile navigation
 * @type {[{path: string, name: string},{path: string, name: string},{path: string, name: string},{path: string, name: string},{path: string, name: string}]}
 */
const links = [
    {
        name: 'Accueil',
        path: '/',
    }, {
        name: 'Compétences',
        path: '/resume',
    },{
        name: 'Projet',
        path: '/projet',
    },{
        name: 'Contact',
        path: '/contact',
    }
];

/**
 * MobileNav component
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Mathias <span className="text-accent"></span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                        text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex justify-center mt-8">
                <Link href="/CV_MOREL_Mathias.pdf">
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                        <span>Téléchargez mon CV</span>
                        <FiDownload className="text-4xl"/>
                    </Button>
                </Link>
            </div>
        </SheetContent>
    </Sheet>
}

export default MobileNav;