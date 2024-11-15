import express, { json } from 'express';
import cors from 'cors'
import { connectDB } from './src/connectDB.js';
import webUserRouter from './src/router/webUserRouter.js';

let port = process.env.PORT || 5000;
let app = express();

app.use(json())
app.use(cors())

connectDB()

app.use('/webuser', webUserRouter)
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})