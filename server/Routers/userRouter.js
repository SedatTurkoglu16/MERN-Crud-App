import express, { json } from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, location, hobby } = req.body;
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      location,
      hobby,
    });
    return res.status(201), json(createdUser);
  } catch (err) {
    console.log(err);
  }
});

router.route("/").get((req, res) => {
  User.find().then((foundUsers) => res.json(foundUsers));
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndRemove(id).exec();
  res.send("deleted");
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const editedUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    hobby: req.body.hobby,
    id: req.body.id,
  };
  try {
    await User.findByIdAndUpdate(id, { $set: editedUser });
  } catch (err) {
    console.log(err);
  }
});

export default router;
