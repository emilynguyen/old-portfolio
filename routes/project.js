/*
 * Project pages
 */

var data = require('../data.json');

exports.view = function(req, res){
	var inputTitle = req.params.title;

	// Check if valid project url
	var projects = data.projects;

	for (var i = 0; i < projects.length; i++) {
		var currProject = projects[i];

		// Render project page if input title matches a project
		if (inputTitle == currProject.url) {
			res.render('project', {
				data,
				currProject,
				"title" : currProject.title + " | Emily Nguyen"
			});
			return;
		}
	}

 	// Otherwise, show 404
 	res.render('404', {
 		data,
 		"title" : "Page Not Found | Emily Nguyen"
 	});
};