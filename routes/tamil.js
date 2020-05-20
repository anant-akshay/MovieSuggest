var express = require("express");
var router = express.Router();
var Tamil = require("../models/tamil.js");

router.get("/",function(req,res){
	Tamil.find({}, function(err,tamilMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("tamil",{tamilMovies:tamilMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Tamil.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/tamil");
		}
	});
});
router.delete("/:id",function(req,res){
	Tamil.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/tamil")
		}else{
			res.redirect("/tamil")
		}
	});
});



module.exports = router;