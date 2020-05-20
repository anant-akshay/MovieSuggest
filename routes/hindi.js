var express = require("express");
var router = express.Router();
var Hindi = require("../models/hindi.js");

router.get("/",function(req,res){
	Hindi.find({}, function(err,hindiMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("hindi",{hindiMovies:hindiMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Hindi.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/hindi");
		}
	});
});
router.delete("/:id",function(req,res){
	Hindi.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/hindi")
		}else{
			res.redirect("/hindi")
		}
	});
});



module.exports = router;