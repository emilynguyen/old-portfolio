
/*
 * GET 404 page.
 */

var data = require('../data.json');

exports.view = function(req, res){
	console.log("error page");
  res.render('404', {
  	data,
  	"title" : "Page Not Found | Emily Nguyen",
  	"description" : "Oops! The page you're looking for does not exist."
  });
};