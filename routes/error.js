/*
 * GET 404 page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  console.log("error page");
  res.render("404", {
    data,
    title: "Page Not Found | Emily Nguyen",
    description: "Designer, developer, and HCI student that loves crafting visual experiences and seeing them through to implementation."
  });
};
