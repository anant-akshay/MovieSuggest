var express = require("express");
var router = express.Router();
var Kannada = require("../models/kannada.js");

router.get("/",function(req,res){
	Kannada.find({}, function(err,kannadaMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("kannada",{kannadaMovies:kannadaMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Kannada.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/kannada");
		}
	});
});
router.delete("/:id",function(req,res){
	Kannada.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/kannada")
		}else{
			res.redirect("/kannada")
		}
	});
});



module.exports = router;