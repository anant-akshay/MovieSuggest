var mongoose = require("mongoose");

var tamilSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("Tamil",tamilSchema);