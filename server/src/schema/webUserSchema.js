import mongoose from "mongoose";

const webUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: ['name is required', true]
    },
    lastName: {
        type: String,
        required: ['lastName is required', false]
    },
    email: {
        type: String,
        required: ['email is required', true]
    },
    message: {
        type: String,
        required: ['message is required', true]
    }
});
export default webUserSchema;
