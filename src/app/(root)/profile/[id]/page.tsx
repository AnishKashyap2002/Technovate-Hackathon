import { getUserById } from "@/actions/getUserById";
import React from "react";
import bg from "@/../public/bg-sky.jpg";
import Image from "next/image";
import userImage from "@/../public/user.jpeg";
import { UserType } from "@/types";

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const user = (await JSON.parse(await getUserById(id))) as UserType;
    // console.log(user);
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
                            src={user.image || userImage}
                            alt="user"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="font-bold text-gray-900 text-2xl">
                        {user.name}
                    </div>
                    <div className="font-medium text-gray-600  text-sm">
                        {user.bio}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
