"use server";

import User from "@/lib/user";
import Connection from "@/lib/connectDB";

export const getUserByEmail = async (email: string) => {
    Connection();

    const user = await User.findOne({ email: email }).lean();

    return JSON.stringify(user);
};
