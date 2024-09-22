const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const tripSchema = new mongoose.Schema({
    user: {type: ObjectId, ref: "User", required: true},
    time: {
        type: Date,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    major: {
        type: String,
        enum: ["Cape Cod", "Fire Island National Seashore", "Sandy Hook", "Cape May", "Rehoboth Beach", "Narragansett Town Beach", "Old Orchard Beach", "Hampton Beach State Park"],
    }, shellGraphic: {
        type: ObjectId,
        ref: "ShellGraphic",
        required: true,
    }, shells: {
        type: [{type: ObjectId, ref: "Shell"}],
        default: [],
    }, photos: {
        type: [{type: ObjectId, ref: "Photo", required: true}],
        default: [],
    }
});

module.exports = mongoose.model("Trip", tripSchema);