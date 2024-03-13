import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Poll from "@/lib/poll";
import User from "@/lib/user";
import { PollType, UserType } from "@/types";

export async function GET() {
    Connection();

    const polls = await Poll.find({})
        .populate("user")
        .populate("options")
        .sort({ createdAt: -1 });
    // console.log(poll);
    return NextResponse.json(polls);
}
