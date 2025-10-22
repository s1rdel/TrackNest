const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	type: { type: String, enum: ['track','album','artist'], required: true },
	title: { type: String, required: true, trim: true },
	artist: { type: String, trim: true },
	album: { type: String, trim: true },
	year: Number,
	rating: { type: Number, default: 0, min: 0, max: 5},
	note: String,
	ownerId: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}
}, { timestamps: true });

mongoose.model('Item', itemSchema);