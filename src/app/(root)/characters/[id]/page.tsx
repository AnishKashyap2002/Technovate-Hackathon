"use client";

import React from "react";
import bg from "@/../public/bg-sky.jpg";
import Image from "next/image";
import userImage from "@/../public/user.jpeg";
import { getCharacterById } from "@/actions";

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const character = getCharacterById(id);
    console.log(id);
    return (
        <div className="">
            <div className=" relative w-full h-[150px] z-[-1]">
                <Image
                    src={bg}
                    alt="background"
                    fill
                    className="object-cover z-[-1]"
                />
            </div>
            <div className="flex gap-4 z-10 items-center flex-col mt-[-75px]">
                <div className={`  p-1 bg-white z-20 rounded-full`}>
                    <div className="p-2 bg-white relative rounded-full  h-[150px] w-[150px]">
                        <Image
                            src={character?.img || userImage}
                            alt="user"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="font-bold text-gray-900 text-2xl">
                        {character?.name}
                    </div>
                    <div className="font-medium text-gray-600  text-sm">
                        {character?.powers}
                    </div>
                    <div className="font-medium text-gray-600  text-sm">
                        {character?.description}
                    </div>
                    <div className="font-medium text-gray-600  text-sm">
                        {character?.real_name}
                    </div>
                    <div className="font-medium text-gray-600  text-sm">
                        {character?.trivia}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
