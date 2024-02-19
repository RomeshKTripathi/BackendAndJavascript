import mongoose from "mongoose";

const professionalUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);
