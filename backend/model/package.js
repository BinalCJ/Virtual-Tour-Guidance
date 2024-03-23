const mongoose = require("mongoose");
const schema = mongoose.Schema;

const package = new schema({
    Title : { type: String, required: true },
    Subheader : { type: String, required: true },
    Image : { type: String, required: true },
    Price : { type: String, required: true },
    Desc : { type: String, required: true },
    Summary : { type: String, required: true },
    CloudID : { type: String, required: true }
});

const Package = mongoose.model('Package', package);
module.exports = Package;