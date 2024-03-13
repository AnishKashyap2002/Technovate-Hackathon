import { OptionType, PollType } from "@/types";
import defaultUser from "../../../public/user.jpeg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import PieChart from "./PieChart";

const PollCard = ({ poll, user_id }: { poll: PollType; user_id: string }) => {
    const router = useRouter();

    // console.log(poll);

    const [voted, setVoted] = useState(false);
    let voteCount = [] as number[];
    let voteLabel = [] as string[];

    const [newPoll, setNewPoll] = useState(poll);
    const hasVoted = () => {
        for (let i = 0; i < poll.voters.length; i++) {
            if (poll.voters[i].toString() == user_id) {
                for (let i = 0; i < 4; i++) {
                    voteCount.push(newPoll.options[i].votes);
                    voteLabel.push(newPoll.options[i].name);
                }
                return true;
            }
        }
        return false;
    };
    useEffect(() => {
        setVoted(hasVoted());
    }, []);
    hasVoted();

    const handleClick = async (option: OptionType, i: number) => {
        if (voted) {
            return;
        }

        const updatePoll = newPoll;
        updatePoll.options[i].votes += 1;

        //@ts-ignore
        updatePoll.voters.push(user_id);

        axios
            .post("/api/vote/poll", updatePoll)
            .then((response) => {
                setNewPoll(response.data);
                for (let i = 0; i < 4; i++) {
                    voteCount.push(updatePoll.options[i].votes);
                    voteLabel.push(updatePoll.options[i].name);
                }
                setVoted(true), toast.success("voted successfully");
                router.refresh();
            })
            .catch((error) => {
                toast.error("Unable to vote...");
            });
    };

    return (
        <div className="px-4 py-2 flex flex-col gap-2 shadow-md border-2 bg-gray-200    rounded-md sm:max-w-[700px] w-full ">
            <div className="flex gap-6 w-full">
                <div className="">
                    <div className="flex gap-2 h-fit items-center">
                        <div className="relative h-[30px] w-[30px] rounded-full">
                            <Image
                                src={newPoll?.user?.image || defaultUser}
                                alt="User profile pic"
                                className="object-fit rounded-full"
                                fill
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-medium ">
                                {newPoll?.user?.name}
                            </span>
                            <span className="text-xs text-gray-700">
                                {/* {poll?.createdAt.toDateString()} */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-between">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="font-bold text-xl">
                                {" "}
                                {newPoll.title}
                            </div>
                        </div>
                        <ul className="list-disc ">
                            {newPoll?.options?.map((option, i) => (
                                <li
                                    className="flex gap-4 py-2"
                                    key={Math.random()}
                                >
                                    <span
                                        className={`${
                                            voted
                                                ? " opacity-70 bg-gray-700"
                                                : "bg-green-700"
                                        } rounded-md text-white p-4 `}
                                        onClick={() => handleClick(option, i)}
                                    >
                                        {option.name}
                                        {voted && (
                                            <div className="">
                                                {option.votes}
                                            </div>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="h-[300px] w-full">
                        <PieChart
                            voteCount={voteCount}
                            voteLabel={voteLabel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollCard;
