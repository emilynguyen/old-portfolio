/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("home", {
    data,
    title: "Emily Nguyen | Designer + Developer",
    description:
      "Designer, developer, and HCI student that loves crafting visual experiences and seeing them through to implementation."
  });
};
