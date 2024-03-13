"use client";

import React from "react";
import { characterArr } from "@/constants/characters";
import Image from "next/image";

const Page = () => {
    return (
        <div className="flex justify-center flex-wrap gap-10 p-10">
            {characterArr.map((character) => (
                <a
                    href={`/characters/${character.name.split(" ").join("_")}`}
                    key={character.name}
                >
                    <div className="cursor-pointer w-[400px] h-[300px] rounded-md relative flex flex-col justify-center items-center padding-4">
                        <h1 className="font-bold z-10 text-white">
                            {character.name}
                        </h1>
                        <Image
                            src={character.img}
                            alt="image"
                            fill
                            className=" h-full absolute"
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Page;
