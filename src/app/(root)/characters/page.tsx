"use client";

import React from "react";
import { characterArr } from "@/constants/characters";
import Image from "next/image";

const Page = () => {
    return (
        <div className="flex justify-center flex-wrap gap-5 p-5">
            {characterArr.map((character) => (

                <article className="relative group isolate flex flex-col justify-end shadow-lg shadow-black overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[350px] mx-auto mt-4 h-[400px] ">
                    <span className="relative text-white text-sm justify-end opacity-0 line-clamp-2 transition duration-300 delay-100 group-hover:opacity-100 z-10 object-cover">{character.description}</span>
                    <a
                        href={`/characters/${character.name.split(" ").join("_")}`}
                        key={character.name}
                    >
                        <button type="button" className="absolute  opacity-0 group-hover:opacity-100 mt-6 ml-44 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 z-10 font-medium rounded-lg  text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
                    </a>
                    <Image src={character.img} alt="Image" fill className="absolute inset-0 align-bottom h-full w-full object-cover transition duration-300 group-hover:blur-sm group-hover:scale-110" />
                    <div className="absolute inset-0 transition duration-300 delay-100 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:from-gray-950 group-hover:via-gray-950" />
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:invisible transition delay-50 duration-300">{character.name}</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 group-hover:invisible">{character.real_name}</div>
                </article>
            ))}
        </div>
    );
};

export default Page;
