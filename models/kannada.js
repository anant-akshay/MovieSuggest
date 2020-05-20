var mongoose = require("mongoose");

var kannadaSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("Kannada",kannadaSchema);