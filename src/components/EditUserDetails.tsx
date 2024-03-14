"use client";

import { UserType } from "@/types";
import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const EditUserDetails = ({ user }: { user: UserType }) => {
    const router = useRouter();
    const [newUser, setNewUser] = useState({
        name: user?.name,
        image: user?.image,
        bio: user?.bio || "",
    });

    const { update } = useSession();

    const [loading, setLoading] = useState(false);

    const handleUploadImage = (result: any) => {
        setNewUser({ ...newUser, image: result?.info?.secure_url });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        await axios
            .post("/api/edit/user", newUser)
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    toast.success("Profile Updated Successfully");

                    // the update function here is updaing the session
                    update();
                    router.refresh();
                    router.push(`/profile/${user._id}`);
                } else {
                    toast.error("An error occured");
                }
            })
            .catch(() => {
                toast.error("Error occured");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className={`mt-4 px-2 py-2 flex justify-center ${loading && "opacity-75"}`}>
            <div className="w-full flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6 " onSubmit={handleSubmit}>
                    <h5 className="text-3xl font-medium text-gray-900 text-center dark:text-white">Edit your profile</h5>
                    <div className="flex flex-wrap justify-center">
                        <div className="px-4">
                            <img src={newUser?.image} alt="..." className="shadow object-cover rounded-full max-w-500 aspect-square align-middle border-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                        <input type="text" name="user" id="user" value={newUser.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter username" required onChange={(e) =>
                            setNewUser({ ...newUser, name: e.target.value })
                        } />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bio</label>
                        <textarea name="bio" id="bio" value={newUser.bio} className="row-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your bio" onChange={(e) =>
                            setNewUser({ ...newUser, bio: e.target.value })
                        }/>
                    </div>
                    <div className="w-full flex justify-center gap-4">
                    <button type="submit" className=" text-white bg-blue-700 align-middle hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
                        <CldUploadButton
                            options={{
                                maxFiles: 1,
                            }}
                            uploadPreset="s0suaub8"
                            onUpload={handleUploadImage}
                        >
                            <button type="submit" className=" text-white bg-blue-700 align-middle hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <HiPhoto
                                size={30}
                                className={"bg-transparent text-white"}
                            />
                            </button>
                        </CldUploadButton>
                    </div>
                </form>
            </div>


            {/* <form
                onSubmit={handleSubmit}
                className="border-2 flex flex-col gap-3 w-full sm:max-w-md border-blue-600 rounded-md shadow-md   px-4 py-2"
            >
                <div className="flex font-bold justify-center text-2xl text-gray-800">
                    Edit Profile
                </div>
                <div className="flex justify-center">
                    <div className="relative rounded-full">
                        <Image
                            alt="image"
                            src={newUser?.image}
                            width={200}
                            height={200}
                            className="object-fit rounded-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-left gap-4 ">
                    <label
                        htmlFor=""
                        className="font-bold text-lg"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className=" outline-none w-full bg-gray-200 text-gray-800 px-4 py-2 shadow-md rounded-md"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({ ...newUser, name: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col items-left gap-4">
                    <label
                        htmlFor=""
                        className="font-bold text-lg "
                    >
                        Bio
                    </label>
                    <textarea
                        rows={5}
                        placeholder="Enter your bio"
                        className="outline-none w-full bg-gray-200 text-gray-800 px-4 py-2 shadow-md rounded-md"
                        value={newUser.bio}
                        onChange={(e) =>
                            setNewUser({ ...newUser, bio: e.target.value })
                        }
                    />
                </div>

                <div className=" flex items-center justify-between">
                    <div className="flex gap-4">
                        <label
                            htmlFor=""
                            className="font-bold"
                        >
                            Avatar
                        </label>
                        <CldUploadButton
                            options={{
                                maxFiles: 1,
                            }}
                            uploadPreset="s0suaub8"
                            onUpload={handleUploadImage}
                        >
                            <HiPhoto
                                size={30}
                                className={"bg-sky-500 text-white"}
                            />
                        </CldUploadButton>
                    </div>

                    {newUser?.image && (
                        <Image
                            alt="image"
                            src={newUser.image}
                            width={100}
                            height={100}
                        />
                    )}
                </div>
                <div className=" mt-4 text-white flex justify-between items-center">
                    <button
                        className="rounded-md px-3 py-2 bg-green-700 "
                        type="submit"
                        disabled={loading}
                    >
                        Submit
                    </button>
                </div>
            </form> */}
        </div>
    );
};

export default EditUserDetails;
