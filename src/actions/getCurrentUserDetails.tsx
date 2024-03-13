import { Session, getServerSession } from "next-auth";
import Connection from "@/lib/connectDB";
import User from "@/lib/user";

export default async function getCurrentUserDetails() {
    Connection();
    const session = await getServerSession();

    // console.log(session?.user?.email);

    const user = await User.findOne({ email: session?.user?.email }).lean();
    console.log(user, "This is current user");

    return JSON.stringify(user);
}
