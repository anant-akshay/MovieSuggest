var express = require("express");
var router = express.Router();
var English = require("../models/english.js");

router.get("/",function(req,res){
	English.find({}, function(err,englishMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("english",{englishMovies:englishMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	English.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/english");
		}
	});
});
router.delete("/:id",function(req,res){
	English.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/english")
		}else{
			res.redirect("/english")
		}
	});
});



module.exports = router;