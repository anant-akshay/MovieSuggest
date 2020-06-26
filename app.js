var express   = require("express");
var	mongoose  = require("mongoose");
//  var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = require("jquery")(window);
var bodyParser= require("body-parser");
var app       = express();
var methodOverride = require("method-override");

var teluguRoutes    = require("./routes/telugu");
var tamilRoutes    = require("./routes/tamil");
var englishRoutes    = require("./routes/english");
var malyalamRoutes    = require("./routes/malyalam");
var hindiRoutes    = require("./routes/hindi");
var kannadaRoutes    = require("./routes/kannada");
var othersRoutes    = require("./routes/others");

var url = process.env.DATABASEURL || "mongodb://localhost:27017/MovieSuggest"
mongoose.connect("mongodb://localhost/MovieSuggest",{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/",function(req,res){
	res.render("landing");
})
app.use("/telugu", teluguRoutes);
app.use("/tamil", tamilRoutes);
app.use("/english", englishRoutes);
app.use("/malyalam", malyalamRoutes);
app.use("/hindi", hindiRoutes);
app.use("/kannada", kannadaRoutes);
app.use("/others", othersRoutes);
mongoose.set('useFindAndModify', false);


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});