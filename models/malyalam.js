var mongoose = require("mongoose");

var malyalamSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("Malyalam",malyalamSchema);