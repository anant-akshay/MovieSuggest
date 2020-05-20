var mongoose = require("mongoose");

var hindiSchema = new mongoose.Schema({
	name : String
	
});

module.exports = mongoose.model("Hindi",hindiSchema);