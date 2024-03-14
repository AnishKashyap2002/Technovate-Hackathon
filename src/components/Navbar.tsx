"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import ListBoxModal from "./ListBoxModal";
import SmallNavbar from "./SmallNavbar";
import { useSession } from "next-auth/react";

type ExpandNavbarProps = {
    navLinks: {
        title: string;
        href: string;
        icon: JSX.Element;
    }[];
};

const ExpandNavbar = ({ navLinks }: ExpandNavbarProps) => {
    return (
        <div className="flex items-center">
            {navLinks.map((link) => (
                <a
                    href={link.href}
                    key={link.title + "expand"}
                    className="flex px-4 h-full rounded-md text-white bg-gradient-to-b from-transparent to-transparent p-4 hover:from-fuchsia-600 hover:to-purple-600 "
                >
                    <div className="text-2xl mr-4">{link.icon}</div>
                    <div className="text-sm font-semibold">{link.title}</div>
                </a>
            ))}
        </div>
    );
};

const Navbar = () => {
    const session = useSession();

    return (
        <div className="flex bg-gradient-to-r from-slate-900 to-slate-700 justify-between items-center px-4">
            <div className="hidden sm:block">
                <ExpandNavbar navLinks={navLinks} />
            </div>
            <div className="sm:hidden block">
                <SmallNavbar navLinks={navLinks} />
            </div>
            <div className="">
                <ListBoxModal session={session} />
            </div>
        </div>
    );
};

export default Navbar;
