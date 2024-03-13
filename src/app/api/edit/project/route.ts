import { NextResponse } from "next/server";
import Project from "@/lib/project";
import Connection from "@/lib/connectDB";

export async function POST(request: Request) {
    Connection();
    const {
        name,
        info,
        image,
        link,
        hashtags,
        milestones,
        document,
        id,
        timelimit,
    } = await request.json();
    console.log(id);
    const project = await Project.findOneAndUpdate(
        { _id: id },
        {
            name,
            info,
            image,
            link,
            hashtags,
            milestones,
            document,
            id,
            timelimit,
        }
    );

    console.log(project);
    return NextResponse.json(project);
}
