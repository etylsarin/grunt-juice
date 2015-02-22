/*
 * grunt-juice
 * https://github.com/etylsarin/grunt-juice
 *
 * Copyright (c) 2015 Filip Mares
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	
	var juice = require('juice');
	
	grunt.registerMultiTask('juice', 'Takes an html file with css link and turns inline.  Great for emails.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options(),
			done = this.async(),
			index = 0,
			len = this.files.length;
		
		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			var filepath = f.src.toString();

			if (typeof filepath !== 'string' || filepath === '') {
				grunt.log.error('src must be a single string');
				return false;
			}
			
			if (!grunt.file.exists(filepath)) {
				grunt.log.error('Source file "' + filepath + '" not found.');
				return false;
			}
			
			juice.juiceFile(filepath, options, function(err, html) {
			
				if (err) {
					return grunt.log.error(err);
				}
				
				grunt.file.write(f.dest, html);
				grunt.log.writeln('File "' + f.dest + '" created.');
				
				index += 1;
				if (index === count) {
					done();
				}
			
			});
		
		});
	});

};
