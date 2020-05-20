var express = require("express");
var router = express.Router();
var Malyalam = require("../models/malyalam.js");

router.get("/",function(req,res){
	Malyalam.find({}, function(err,malyalamMovies){
		if(err){
			console.log(err)
		}
		else{
			res.render("malyalam",{malyalamMovies:malyalamMovies});
		}
	});
});

router.post("/",function(req,res){
	var name = req.body.name;
	var newMovie = {name:name};
	Malyalam.create(newMovie,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/malyalam");
		}
	});
});
router.delete("/:id",function(req,res){
	Malyalam.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/malyalam")
		}else{
			res.redirect("/malyalam")
		}
	});
});



module.exports = router;