import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import Poll from "@/lib/poll";
import User from "@/lib/user";
import { UserType } from "@/types";
import { getServerSession } from "next-auth";

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

    const session = await getServerSession();
    const { coins: oldCoins } = await User.findOne({
        email: session?.user?.email,
    });

    const updatedUser = await User.findOneAndUpdate(
        {
            email: session?.user?.email,
        },
        {
            coins: oldCoins + 5,
        }
    );

    poll.save();
    return NextResponse.json(poll);
}
