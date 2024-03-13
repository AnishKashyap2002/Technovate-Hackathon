import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import User from "@/lib/user";

export async function POST(request: Request) {
    const session = await getServerSession();

    const { name, image, bio } = await request.json();
    const newUser = await User.findOneAndUpdate(
        {
            email: session?.user?.email,
        },
        {
            name,
            bio,
            image,
        }
    );
    return NextResponse.json(newUser);
}
