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
        <div className="flex items-center gap-2 z-50">
            {navLinks.map((link) => (
                <a
                    href={link.href}
                    key={link.title + "expand"}
                    className="flex gap-1 px-4 rounded-md py-2 hover:text-white cursor-pointer text-slate-200 bg-black items-center"
                >
                    <div className="text-2xl ">{link.icon}</div>
                    <div className="text-sm font-semibold">{link.title}</div>
                </a>
            ))}
        </div>
    );
};

const Navbar = () => {
    const session = useSession();

    return (
        <div className="flex bg-[#ff9f0d] justify-between z-50   gap-4 items-center px-4 py-2">
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
