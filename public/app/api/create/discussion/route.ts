import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import User from "@/lib/user";
import { User as UserType } from "@/types";
import Discussion from "@/lib/discussion";

export async function POST(request: Request) {
    Connection();
    const body = await request.json();

    const session = await getServerSession();

    const { topic, hashtags } = body;

    const user = (await User.findOne({
        email: session?.user?.email,
    })) as UserType;

    const discussion = await Discussion.create({
        topic,
        owner: user._id,
        hashtags,
    });

    discussion.save();
    return NextResponse.json(discussion);
}
