"use strict";

var express = require("express");
var exphbs = require("express-handlebars"); 
var http = require("http");
var path = require("path");

// Routes
var home = require("./routes/home");
var about = require("./routes/about");
var archive = require("./routes/archive");
var project = require("./routes/project");
var error = require("./routes/error");

var app = express();

app.set("port", process.env.PORT || 3000);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", home.view);
app.get("/about", about.view);
app.get("/archive", archive.view);
app.get("/archive/:title", project.viewArchive);
app.get("/:title", project.view);
app.get("*", error.view);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server listening on port " + app.get("port"));
});
