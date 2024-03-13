"use client";

import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePollForm = ({ setIsOpen }: Props) => {
    const router = useRouter();
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [poll, setPoll] = useState({
        title: "",
        options: [
            {
                name: "",
                votes: 0,
            },
            {
                name: "",
                votes: 0,
            },
            {
                name: "",
                votes: 0,
            },
            {
                name: "",
                votes: 0,
            },
        ],
    });

    const addOption = (i: number, value: string) => {
        const newPolls = poll;
        newPolls.options[i].name = value;
        setPoll(newPolls);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (poll.title == "") {
            toast.error("Necessary fields are not filled");
        }

        setLoading(true);
        console.log(poll);
        axios
            .post("/api/create/poll", {
                ...poll,
            })
            .then((response) => {
                toast.success("poll published");

                setIsOpen(false);
            })
            .catch((error) => {
                toast.error("An error occured");
            })
            .finally(() => {
                setLoading(false);
                location.reload();
            });
    };

    return (
        <div className={`${loading && "opacity-75"} mt-4`}>
            <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Title*
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) =>
                            setPoll({
                                ...poll,
                                title: e.target.value,
                            })
                        }
                        placeholder="Enter what is this poll is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>

                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Choice 1*
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => addOption(0, e.target.value)}
                        placeholder="Enter what is this poll is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Choice 2*
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => addOption(1, e.target.value)}
                        placeholder="Enter what is this poll is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Choice 3*
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => addOption(2, e.target.value)}
                        placeholder="Enter what is this poll is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Choice 4*
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => addOption(3, e.target.value)}
                        placeholder="Enter what is this poll is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-3 py-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePollForm;
