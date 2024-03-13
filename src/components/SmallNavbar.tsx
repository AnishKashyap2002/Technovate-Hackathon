"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

type smallNavbarProps = {
    navLinks: {
        title: string;
        href: string;
        icon: JSX.Element;
    }[];
};

export default function SmallNavbar({ navLinks }: smallNavbarProps) {
    return (
        <Menu
            as="div"
            className="relative z-50"
        >
            <Menu.Button
                as="div"
                className="flex gap-2 items-center rounded-md cursor-pointer bg-black hover:text-white text-slate-200 px-4 py-2 rounded- md  "
            >
                <div className="text-2xl ">
                    {" "}
                    <AiOutlineMenu />
                </div>
                <span>Menu</span>
                <div className="">
                    <IoMdArrowDropdown />
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-80"
                enterTo="transform opacity-100 scale-200"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-200"
                leaveTo="transform opacity-0 scale-80"
            >
                <Menu.Items className="absolute right-0 bg-black rounded-md z-10  ">
                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.title + "small"}
                            className="flex gap-2 cursor-pointer items-center text-sm  bg-black transition duration-200 hover:bg-gray-500 hover:text-white text-slate-200 rounded-md px-4 py-2"
                        >
                            <div className="font-bold text-2xl">
                                {link.icon}
                            </div>
                            <div className="">{link.title}</div>
                        </a>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
