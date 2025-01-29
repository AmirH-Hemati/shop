import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
mongoose
  .connect("mongodb://localhost:27017/shop")
  .then(() => {
    console.log("conected mongo db");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);
app.listen(2323, () => {
  console.log("listen on port");
});
