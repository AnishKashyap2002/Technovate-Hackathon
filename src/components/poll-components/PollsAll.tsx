"use client";
import { PollType } from "@/types";
import PollCard from "./PollCard";
import { useSession } from "next-auth/react";
import PollButton from "./PollButton";

const PollsAll = ({ pollls }: { pollls: PollType[] }) => {
    const session = useSession();

    return (
        <>
            <div className="min-h-screen mt-4 ">
                <div className="flex justify-center text-2xl">Recent polls</div>
                <div className="flex flex-col gap-4 items-center">
                    {pollls.map((poll: PollType) => (
                        <PollCard
                            key={Math.random()}
                            poll={poll}
                            //@ts-ignore
                            user_id={session.data?._id}
                        />
                    ))}
                </div>
                <PollButton />
                Kade vich nahi pawaya
            </div>
        </>
    );
};

export default PollsAll;
