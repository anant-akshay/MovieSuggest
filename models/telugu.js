var mongoose = require("mongoose");

var teluguSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("Telugu",teluguSchema);