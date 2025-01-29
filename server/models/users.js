import mongoose from "mongoose";

const schemaUsers = new mongoose.Schema({
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  userName: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("User", schemaUsers);
