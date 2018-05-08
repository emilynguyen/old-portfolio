/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("home", {
    data,
    title: "Emily Nguyen | Full Stack Designer",
    description:
      "Human-Computer Interaction student at UC San Diego with a minor in Computer Science. I love crafting visual experiences and seeing them through to implementation."
  });
};
