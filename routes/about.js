/*
 * GET about page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("about", {
    data,
    title: "About | Emily Nguyen",
    description:
      "Designer, developer, and HCI student that loves crafting visual experiences and seeing them through to implementation."
  });
};
