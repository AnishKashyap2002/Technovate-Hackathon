import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        data: {
            type: String,
            required: true,
        },

        image: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    {
        timestamps: true,
    }
);

// check like here the ? is important
const Post = mongoose?.models?.Post || mongoose.model("Post", postSchema);

export default Post;
