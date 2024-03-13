import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    bio: String,
    image: String,
    coins: {
        type: Number,
        defualt: 0,
    },
    inventory: [
        {
            type: String,
            required: true,
        },
    ],
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
