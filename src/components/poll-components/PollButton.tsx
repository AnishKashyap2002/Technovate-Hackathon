"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "../Modal";
import CreatePollForm from "./CreatePollForm";

const PollButton = () => {
    const [open, setIsOpen] = useState(false);
    return (
        <div className="fixed flex flex-col bottom-14 right-10 items-center gap-2 group/parent">
            <button type="button" onClick={() => setIsOpen(true)}
                className="flex justify-center text-white text-3xl items-center gap-2 size-16 font-semibold rounded-lg border border-transparent bg-gradient-radial from-violet-600 to-indigo-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <IoMdAdd />
            </button>
            {/* <div
                className="text-white text-3xlshadow-md cursor-pointer w-fit bg-rose-500 rounded-full p-3"
                onClick={() => setIsOpen(true)}
            >
                
            </div> */}
            <div className="bg-gray-600 px-2 py-2 invisible group-hover/parent:visible group-hover/parent:translate-x-0 transition translate-x-32 text-white text-sm rounded-md">
                Create Poll
            </div>
            <Modal
                title="Create "
                open={open}
                setIsOpen={setIsOpen}
            >
                <CreatePollForm setIsOpen={setIsOpen} />
            </Modal>
        </div>
    );
};

export default PollButton;
