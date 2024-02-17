import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export default async function signUp (req, res) {
    
    const { name, email, password } = req.body;

    if (!name || !email || !password || name === "" || email === "" || password === "") {
      return res.status(400).send("Missing required fields");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword});

    try {
        await newUser.save();
        await res.status(200).send("User created successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}