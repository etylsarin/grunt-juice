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
			count = this.files.length,
			index = 0;
			
		if (count < 1) {
			grunt.verbose.warn('Destination not written because no source files were provided.');
			done(false);
		}
		
		this.files.forEach(function(file) {
			if (!file.src) {
				grunt.verbose.warn('Source file not found.');
				done(false);
			}
			juice.juiceFile(file.src.toString(), options, function(err, html) {
				if (err) {
					return grunt.log.error(err);
				}
				
				grunt.file.write(file.dest, html);
				grunt.log.writeln('File "' + file.dest + '" created.');
				
				index += 1;
				if (index === count) {
					done(true);
				}
				return true;
			});
		});
		
	});
};
