const express = require('express');
const exphbs = require("express-handlebars");
const form = require('body-parser');
const bodyParser = require('body-parser');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/api";
const Models = require("./model");
const apiModels = Models(mongoURL);

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// app.use(session({
//     secret: 'keyboard cat',
//     cookie: {
//         maxAge: 60000 * 30
//     }
// }));
// app.use(flash());

// setting rendering engine
app.engine("html", exphbs({
    defaultLayout: "main",
    extname: "html"
}));
app.use(express.static("public"));
// app.use(express.static("views"))
app.use(form.urlencoded({
    extended: true
}));
app.set("view engine", "html")


app.get("/api/shoes", function(req, res) {
  res.send("Shoe")
});

app.get("/api/shoes/brand/:brandname", function (req, res) {

});

app.get("/api/shoes/size/:size", function (req, res) {

});

app.get("/api/shoes/brand/:brandname/size/:size", function (req, res) {

});

app.post("/api/shoes/sold/:id", function (req, res) {

});

app.post("/api/shoes", function (req, res) {

});


var port = process.env.PORT || 4000;
app.listen(port, function() {
    console.log("Server running at http://localhost:" + port + "/");
});
