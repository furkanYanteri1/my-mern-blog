import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 6,
            max: 60,
            unique: true
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255,
            unique: true,
            validate: {
                validator: function(value) {
                    // Define a regular expression for a basic email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024
        }
    }, { timestamps: true }
);

export default mongoose.model("User", userSchema);