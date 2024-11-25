import mongoose from "mongoose";
import webUserSchema from "webuserSchema.js";

export const Webuser = mongoose.model("Webuser", webUserSchema);
