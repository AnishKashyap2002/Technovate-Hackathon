import mongoose from "mongoose";

let isConnected = false;

const Connection = () => {
    if (isConnected) {
        console.log("already connected");
    } else {
        mongoose
            .connect(process.env.MONGODB_URI as string)
            .then(() => {
                console.log("Connection successful");
                isConnected = true;
            })
            .catch((err: any) => {
                console.log("Something went wrong", err);
            });
    }
};

export default Connection;
