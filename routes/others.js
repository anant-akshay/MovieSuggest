var express = require("express");
var router = express.Router();
var Others = require("../models/others.js");

router.get("/",function(req,res){
	Others.find({}, function(err,othersMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("others",{othersMovies:othersMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Others.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/others");
		}
	});
});
router.delete("/:id",function(req,res){
	Others.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/others")
		}else{
			res.redirect("/others")
		}
	});
});



module.exports = router;