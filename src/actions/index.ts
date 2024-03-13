// import Connection from "@/lib/connectDB";
// import Discussion from "@/lib/discussion";
// import Message from "@/lib/message";
// import Project from "@/lib/project";
// import User from "@/lib/user";
// import { getServerSession } from "next-auth";

// export const getProjectById = async (id: string) => {
//     Connection();
//     const project = await Project.findOne({ _id: id });

//     return JSON.stringify(project);
// };

// // export const getDiscussionById = async (id: string) => {
// //     Connection();
// //     const discussion = await Discussion.findOne({ _id: id });

// //     return JSON.stringify(discussion);
// // };

// // export const getUserDiscussions = async () => {
// //     Connection();
// //     const session = await getServerSession();

// //     const user = await User.findOne({ email: session?.user?.email });
// //     const discussions = await Discussion.find({})
// //         .populate("owner")
// //         .sort({ createdAt: -1 });
// //     return JSON.stringify(discussions);
// // };

// // export const getDiscussionDetailById = async (id: string) => {
// //     Connection();
// //     const discussion = await Discussion.findOne({ _id: id })
// //         .populate("owner")
// //         .populate("messages")
// //         .sort({ createdAt: -1 });

// //     console.log(discussion);
// //     return JSON.stringify(discussion);
// // };

// // export const getMessageById = async (id: string) => {
// //     Connection();
// //     const message = await Message.findOne({ _id: id })
// //         .populate("user")
// //         .sort({ createdAt: -1 });

// //     console.log(message);
// //     return JSON.stringify(message);
// // };

import Poll from "@/lib/poll";
import Connection from "@/lib/connectDB";
import { PollType } from "@/types";

import { characterArr } from "@/constants/characters";

export const getCharacterById = (username: string) => {
    username = username.split("_").join(" ");
    for (let i = 0; i < characterArr.length; i++) {
        if (characterArr[i].name == username) {
            return characterArr[i];
        }
    }
};

export const getPolls = async () => {
    try {
        Connection();

        const polls = await Poll.find({})
            .populate("user")
            .populate("options")
            .sort({ createdAt: -1 });
        // console.log(poll);
        return polls as PollType[];
    } catch (error) {
        return [];
    }
    return [];
};
