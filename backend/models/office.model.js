const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officeSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
}, {
    timestamps: true,
});

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;