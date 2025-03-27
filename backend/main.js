import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import User from "./models/user.model.js"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()
const app = express()


app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));


app.post("/register", async (req, res) => {
    const user = req.body;
    if(!user.username | !user.password){
        res.json({message: "Error! Please fill up all fields"})
        return;
    }
    const newuser = new User({username:user.username,password: user.password})

    try {
        await newuser.save()
        res.status(200).json({message: "User Saved Successfully", user: newuser})
    } catch (error) {
        console.log("Error! Failed to save user info!")
        return;
    }
})


app.get("/", (req, res) => {
    // console.log("Received request at /");
    res.json({username: "xxufnaviin", password: "aerichandesu"}); 
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000 ");
})




