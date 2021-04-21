const mongoose = require("mongoose");

const { Schema } = mongoose;

const updateCodeSchema = new Schema({
    code: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    version: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
});

module.exports = mongoose.model("updateCode", updateCodeSchema);