"use client";

import { Sheet , SheetContent , SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import {} from 'react-icons/ci';

const Links = [
    {
        name: 'home',
        path: '/',
    }, {
        name: 'services',
        path: '/services',
    },{
        name: 'resume',
        path: '/resume',
    },{
        name: 'work',
        path: '/work',
    },{
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    return <nav>Mobilenav</nav>
}

export default MobileNav;