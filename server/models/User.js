const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, default: "defaultAvatar.png"},
    trips: {
        type: [{type: ObjectId, ref: "Trip"}],
        default: [],
    },
    badges: {
        type: [{type: ObjectId, ref: "Badge"}],
        default: [],
    },
    shells: {
        type: [{type: ObjectId, ref: "Shell"}],
        default: [],
    }
});



module.exports = mongoose.model("User", userSchema);