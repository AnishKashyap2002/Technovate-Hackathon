import { NextResponse } from "next/server";
import Connection from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Project from "@/lib/project";
import User from "@/lib/user";
import { User as UserType } from "@/types";

export async function POST(request: Request) {
    Connection();
    const body = await request.json();

    const session = await getServerSession();

    const {
        info,
        link,
        image,
        document,
        name,
        hashtags,
        timelimit,
        milestones,
    } = body;

    console.log(milestones);

    const user = (await User.findOne({
        email: session?.user?.email,
    })) as UserType;

    const project = await Project.create({
        info,
        hashtags,
        milestones,
        timelimit,
        user: user._id,
        link,
        name,
        image,
        document,
    });

    project.save();
    return NextResponse.json(project);
}
