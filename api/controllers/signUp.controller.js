import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {errorCreator} from "../utils/error.js";

export default async function signUp (req, res, next) {
    
    const { name, email, password } = req.body;

    if (!name || !email || !password || name === "" || email === "" || password === "") {
        return next(errorCreator(400, "All fields are required"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword});

    try {
        await newUser.save();
        await res.status(200).json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        next(error);
    }
    
}