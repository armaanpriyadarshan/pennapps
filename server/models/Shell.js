const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const shellSchema = new mongoose.Schema({
    species: {
        type: String,
        required: true,
    },
    graphic: {
        type: ObjectId,
        ref: "ShellGraphic",
        required: true,
    },
    photos: {
        type: [{type: ObjectId, ref: "Photo"}],
        default: [],
    }
});

module.exports = mongoose.model("Shell", shellSchema);