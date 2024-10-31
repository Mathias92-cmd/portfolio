"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

/**
 * List of links for the navigation
 * @type {[{path: string, name: string},{path: string, name: string},{path: string, name: string},{path: string, name: string},{path: string, name: string}]}
 */
const links = [
    {
        name: "Accueil",
        path: "/",
    }, {
        name: "Services",
        path: "/services",
    }, {
        name: "Skills",
        path: "/resume",
    }, {
        name: "Projets",
        path: "/projet",
    }, {
        name: "Contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex justify-end gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
