var express = require("express");
var router = express.Router();
var Telugu = require("../models/telugu.js");

router.get("/",function(req,res){
	Telugu.find({}, function(err,teluguMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("telugu",{teluguMovies:teluguMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Telugu.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/telugu");
		}
	});
});
router.delete("/:id",function(req,res){
	Telugu.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/telugu")
		}else{
			res.redirect("/telugu")
		}
	});
});



module.exports = router;