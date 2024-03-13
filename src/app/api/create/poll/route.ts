import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Poll from "@/lib/poll";
import User from "@/lib/user";
import { UserType } from "@/types";

export async function POST(request: Request) {
    Connection();
    const body = await request.json();

    const session = await getServerSession();

    const { title, options } = body;

    const user = (await User.findOne({
        email: session?.user?.email,
    })) as UserType;

    const poll = await Poll.create({
        user: user._id,
        title,
        options,
    });

    poll.save();
    return NextResponse.json(poll);
}
