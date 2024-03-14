"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { userLinks } from "@/constants";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
// import user from "../../public/user.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { RiCoinsLine } from "react-icons/ri";

type useSessionProps = {
    data: Session | undefined | null;
    status: "loading" | "authenticated" | "unauthenticated";
};

export default function ListBoxModal({
    session,
}: {
    session: useSessionProps;
}) {
    // const session = useSession();
    const { data } = session;
    const router = useRouter();

    const handleClick = (route: string) => {
        if (route == "/logout") {
            signOut();
        } else if (route == "/profile") {
            //@ts-ignore
            const { _id } = data;

            router.push(`${route}/${_id}`);
        } else {
            router.push(route);
        }
    };

    if (session.status == "unauthenticated" || session.status == "loading") {
        return (
            <div className="text-white font-bold cursor-pointer">Sign In </div>
        );
    }

    return (
        <Menu
            as="div"
            className="relative"
        >
            <Menu.Button
                as="div"
                className="flex gap-2 items-center cursor-pointer bg-transparent hover:text-white text-slate-200 px-4 py-2 rounded- md  "
            >
                <div className="flex gap-4 items-center w-full">
                    <div className="flex items-center">
                        <span className="text-yellow-700 font-medium text-sm">
                            {
                                // @ts-ignore
                                data?.coins
                            }
                        </span>
                        <RiCoinsLine className="text-yellow-700 font-extrabold text-xl" />
                    </div>

                    <div className=" relative  h-[30px] w-[30px] rounded-full bg-green-400 ">
                        {" "}
                        <Image
                            // @ts-ignore
                            src={data?.image}
                            alt=""
                            className="object-fit rounded-full"
                            fill
                        />
                    </div>

                    {/* @ts-ignore */}
                    <span>{data?.name}</span>
                    <div className="">
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-20 right-0 bg-black rounded-md  ">
                    {userLinks.map((link) => (
                        <div
                            key={link.title}
                            onClick={() => handleClick(link.href)}
                            className="flex  z-[999] gap-2 cursor-pointer items-center text-sm  bg-black transition duration-200 hover:bg-gray-500 hover:text-white text-slate-200 rounded-md px-4 py-2"
                        >
                            <div className="font-bold text-2xl">
                                {link.icon}
                            </div>
                            <div className="">{link.title}</div>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
