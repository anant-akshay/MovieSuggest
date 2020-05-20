var mongoose = require("mongoose");

var othersSchema = new mongoose.Schema({
	name : String,
	language:String
	
});

module.exports = mongoose.model("Others",othersSchema);