const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const photoSchema = new mongoose.Schema({
    trip: {type: ObjectId, ref: "Trip"},
    path: {
        type: String,
        required: true,
    },
    species: {type: String}
});

module.exports = mongoose.model("Photo", photoSchema);