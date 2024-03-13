import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Project from "@/lib/project";
import User from "@/lib/user";
import {
    Message as MessageType,
    User as UserType,
    Discussion as DiscussionType,
} from "@/types";
import Discussion from "@/lib/discussion";
import Message from "@/lib/message";

export async function POST(request: Request) {
    Connection();
    const bodyRequest = await request.json();

    const session = await getServerSession();

    const { image, body, discussion } = bodyRequest;
    console.log(bodyRequest);

    const user = (await User.findOne({
        email: session?.user?.email,
    })) as UserType;

    const message = await Message.create({
        body,
        user: user._id,
        discussion,
        image,
    });

    const updatedDiscussion = (await Discussion.findOneAndUpdate(
        { _id: discussion },
        {
            $push: {
                messages: message._id,
            },
        }
    )) as DiscussionType;

    // pusherClient.subscribe(pusherKey);
    //     pusherClient.bind("conversation:new", newHandler);

    console.log(updatedDiscussion);

    return NextResponse.json(message);
}
