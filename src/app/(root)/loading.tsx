"use client";
import { ClipLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <ClipLoader
                color="blue"
                size={50}
            />
        </div>
    );
};

export default loading;
