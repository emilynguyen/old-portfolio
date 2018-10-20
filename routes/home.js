/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("home", {
    data,
    title: "Emily Nguyen | Designer + Developer",
    description:
      "Human-Computer Interaction student at UC San Diego. Loves crafting visual experiences and seeing them through to implementation."
  });
};
