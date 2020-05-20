var mongoose = require("mongoose");

var englishSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("English",englishSchema);