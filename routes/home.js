
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('home', {
 		data,
 		"title" : "Emily Nguyen - Developer & Designer",
 		"description" : "Hiya, my name is Emily! I’m a third year student at UC San Diego, pursuing a degree in Cognitive Science: Human-Computer Interaction and a minor in Computer Science. I love crafting visual experiences and seeing them through to implementation."
  });
};