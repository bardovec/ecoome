import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    count: String,
    weight: String,
    comments: [String],
    imageUrl: String,
    size: {
        width: String,
        height: String
    }
});

let PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
