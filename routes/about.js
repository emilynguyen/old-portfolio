
/*
 * GET about page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('about', {
  	data,
  	"title" : "About"
  });
};