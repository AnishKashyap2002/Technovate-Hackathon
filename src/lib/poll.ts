import mongoose from "mongoose";

const pollSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        options: [
            {
                name: {
                    type: String,
                    required: true,
                },
                votes: {
                    type: Number,
                    default: 0,
                },
            },
        ],

        voters: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Poll = mongoose?.models?.Poll || mongoose.model("Poll", pollSchema);

export default Poll;
