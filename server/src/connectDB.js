
import mongoose from 'mongoose';


export const connectDB = () => {
    mongoose.connect("mongodb+srv://xthaprabin125:QiPtrTwuWkVePYgQ@prabin.4q1jx.mongodb.net/?retryWrites=true&w=majority&appName=Prabin")
    console.log('Connected to databse');
}

