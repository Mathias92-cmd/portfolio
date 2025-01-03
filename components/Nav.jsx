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
        name: "Compétences",
        path: "/resume",
    }, {
        name: "Projets",
        path: "/projet",
    }, {
        name: "Contact",
        path: "/contact",
    }
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
            <a href="https://portfolio-en-flax.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src="/uk2.png" alt="English Version" style={{ width: '30px', height: '20px' }} />
            </a>
        </nav>
    );
};

export default Nav;