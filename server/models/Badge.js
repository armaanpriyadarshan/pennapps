const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const badgeSchema = new mongoose.Schema({
    trip: {type: ObjectId, ref: "Trip", required: true},
    model: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Badge", badgeSchema);