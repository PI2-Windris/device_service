const mongoose = require("mongoose");

const { Schema } = mongoose;

const updateCodeSchema = new Schema({
    codeString = {
        type: mongoose.Schema.Types.String,
        required: true,
    }
},{
    timestamps: true
});

module.exports = mongoose.model("updateCode", updateCodeSchema);