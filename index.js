const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser')
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/api";
const Models = require("./model");
const model = Models(mongoURL);

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// setting rendering engine
app.engine("html", exphbs({
    defaultLayout: "main",
    extname: "html"
}));
app.use(express.static("public"));

app.set("view engine", "html")


app.get("/api/shoes", function(req, res) {
    model.apiModel.find({

    }, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })

});

app.get("/api/shoes/brand/:brandname", function(req, res) {

});

app.get("/api/shoes/size/:size", function(req, res) {

});

app.get("/api/shoes/brand/:brandname/size/:size", function(req, res) {

});

app.post("/api/shoes/sold/:id", function(req, res) {

});

app.post("/api/shoes", function(req, res) {
    var brandName = req.body.brand
    var shoeSize = req.body.size
    var stock = req.body.in_stock
    var shoeColors = req.body.color
    var shoePrice = req.body.price

    model.apiModel.create(req.body, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results);
        }
    })



});


var port = process.env.PORT || 4000;
app.listen(port, function() {
    console.log("Server running at http://localhost:" + port + "/");
});
