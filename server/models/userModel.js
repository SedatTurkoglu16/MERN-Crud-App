import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    personId: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    location: String,
    hobby: String,
});

export default mongoose.model("User", userSchema);