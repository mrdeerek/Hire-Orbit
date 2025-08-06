import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  // message: String,
  heading: String,
  content: String,
  image: String,
  likes: [
    {
      reactorUserId: String,
      reactorUserName: String,
    },
  ],
  createdAt: { type: Date, default: Date.now }, 
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
