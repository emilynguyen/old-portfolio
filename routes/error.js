
/*
 * GET 404 page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('404', {
  	data,
  	"title" : "Page Not Found"
  });
};