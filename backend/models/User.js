import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  subscribers: {
    type: Number,
  },
  subscribedUsers: {
    type: [String],
  },
},
{
    timestamps: true,
});

export default mongoose.model("User", UserSchema);