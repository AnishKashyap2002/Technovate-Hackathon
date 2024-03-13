import { PollType } from "@/types";
import defaultUser from "../../../public/user.jpeg";
import Image from "next/image";
import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const PollCard = ({ poll, user_id }: { poll: PollType; user_id: string }) => {
    let voted = false;
    const hasVoted = () => {
        for (let i = 0; i < poll.voters.length; i++) {
            if (poll.voters[i]._id == user_id) {
                voted = true;
                return;
            }
        }
    };
    hasVoted();

    return (
        <div className="px-4 py-2 flex flex-col gap-2 shadow-md border-2 bg-gray-200    rounded-md sm:max-w-[700px] w-full ">
            <div className="flex gap-6 w-full">
                <div className="">
                    <div className="flex gap-2 h-fit items-center">
                        <div className="relative h-[30px] w-[30px] rounded-full">
                            <Image
                                src={poll?.user?.image || defaultUser}
                                alt="User profile pic"
                                className="object-fit rounded-full"
                                fill
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-medium ">
                                {poll?.user?.name}
                            </span>
                            <span className="text-xs text-gray-700">
                                {poll?.createdAt.toDateString()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-between">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="font-bold text-xl">
                                {" "}
                                {poll.title}
                            </div>
                        </div>
                        <ul className="list-disc ">
                            {poll?.options?.map((option) => (
                                <li
                                    className="flex gap-4 py-2"
                                    key={Math.random()}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="">
                                            <FaRegDotCircle className="text-2xl" />
                                        </span>
                                        {option?.name}
                                    </span>
                                    <span
                                        className={`${
                                            voted && " opacity-70"
                                        } rounded-md`}
                                    >
                                        {option.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollCard;
