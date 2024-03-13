import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Poll from "@/lib/poll";
import User from "@/lib/user";
import { UserType } from "@/types";

export async function POST(request: Request) {
    Connection();
    const body = await request.json();

    const { _id, options, voters } = body;

    const poll = await Poll.findOneAndUpdate(
        { _id: _id },
        {
            voters,
            options,
        }
    );

    poll.save();
    return NextResponse.json(poll);
}
