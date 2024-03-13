import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import Discussion from "@/lib/discussion";

export async function POST(request: Request) {
    Connection();
    const { topic, id } = await request.json();
    console.log(id);
    const discussion = await Discussion.findOneAndUpdate(
        { _id: id },
        {
            topic,
        }
    );

    console.log(discussion);
    return NextResponse.json(discussion);
}
