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
