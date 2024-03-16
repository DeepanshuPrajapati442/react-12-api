const mongoose =  require("mongoose");

const userModel = new mongoose.Schema(
    {
    username: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "User is required"],
        minLength: [3, "username must be at least 3 characters"],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    }, 
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "Username must be at least 3 characters"],
        maxlength: [15, "Username must be at most 15 words"],
    },
 },
   {timestamps: true}

);


const user = mongoose.model("user", userModel);

module.exports = user;