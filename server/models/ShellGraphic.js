const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const shellGraphicSchema = new mongoose.Schema({
    shell: {
        type: Number,
        required: true,
    }, color: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("ShellGraphic", shellGraphicSchema);