import User from "../models/users.js";
import bcy, { genSalt } from "bcrypt";
export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ data: {}, message: "email or password Invalid" });
  }
  const inValid = await bcy.compare(password, user.password);
  if (!inValid) {
    return res
      .status(400)
      .json({ message: "email or password invalid", data: {} });
  }
  res.json({ message: "ok", data: "token" });
}
export async function register(req, res) {
  const { email, password, userName } = req?.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "user Already exist", data: {} });
  }
  const salt = await genSalt();
  const hashedPassword = await bcy.hash(password, salt);
  const reslut = await User.create({
    password: hashedPassword,
    email,
    userName,
  });
  res.json({ message: "ok", data: reslut });
}
