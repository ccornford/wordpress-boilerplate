/* jshint node: true */
/* global $: true */
"use strict";

var gulp = require( "gulp" ),
	/** @type {Object} Loader of Gulp plugins from `package.json` */
	$ = require( "gulp-load-plugins" )(),
	/** @type {Array} JS source files to concatenate and uglify */
	uglifySrc = [
		/** Modernizr */
		"src/bower_components/modernizr/modernizr.js",
		/** Conditionizr */
		"src/js/lib/conditionizr-4.3.0.min.js",
		/** jQuery */
		"src/bower_components/jquery/dist/jquery.js",
		/** libs **/
		"src/js/lib/slick.min.js",
		"src/js/lib/snap.svg-min.js",
		"src/js/lib/respimg.min.js",
		"src/js/lib/lazysizes.min.js",
		/** Page scripts */
		"src/js/main.js"
	],
	/** @type {Object of Array} CSS source files to concatenate and minify */
	cssminSrc = {
		development: [
			/** The banner of `style.css` */
			"src/css/banner.css",
			/** Theme style */
			"src/css/style.css"
		],
		production: [
			/** The banner of `style.css` */
			"src/css/banner.css",
			/** Normalize */
			"src/bower_components/normalize.css/normalize.css",
			/** Theme style */
			"src/css/style.css"
		]
	},
	/** @type {String} Used inside task for set the mode to 'development' or 'production' */
	env = (function() {
		/** @type {String} Default value of env */
		var env = "development";

		/** Test if there was a different value from CLI to env
			Example: gulp styles --env=production
			When ES6 will be default. `find` will replace `some`  */
		process.argv.some(function( key ) {
			var matches = key.match( /^\-{2}env\=([A-Za-z]+)$/ );

			if ( matches && matches.length === 2 ) {
				env = matches[1];
				return true;
			}
		});

		return env;
	} ());

/** CSS Preprocessors */
gulp.task( "sass", function () {
	return gulp.src( "src/css/sass/style.scss" )
		.pipe( $.rubySass({
			style: "compressed",
			precision: 10
		}))
		.on( "error", function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( "src" ) );
});

var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');


/** STYLES */
gulp.task( "styles", [ "sass" ], function() {
	//console.log( "`styles` task run in `" + env + "` environment" );

	gulp.src( cssminSrc[ env ] )
		.pipe( $.concat( "style.css" ))
		.pipe( $.autoprefixer( "last 2 version" ) )
		.on( "error", function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( "src/css" ) )
		.pipe( gulp.dest( "src" ) );
});

/** Uglify */
gulp.task( "uglify", function() {
	return gulp.src( uglifySrc )
		.pipe( $.concat( "main.min.js" ) )
		//.pipe( $.uglify() )
		.pipe( gulp.dest( "src/js" ) );
});

/** Livereload */
gulp.task( "watch", ["styles"], function() {
	var server = livereload();

	/** Watch for livereoad */
	gulp.watch([
		"src/js/**/*.js",
		"src/*.php",
		"src/templates/*.php",
		"src/template-parts/*.php",
		"src/*.css"
	]).on( "change", function( file ) {
		console.log( file.path );
		server.changed( file.path );
	});

	/** Watch for autoprefix */
	gulp.watch( [
		"src/css/sass/*.css",
		"src/css/sass/**/*.css",
		"src/css/sass/**/*.scss",
		"src/css/sass/**/**/*.scss"
	], [ "styles" ] );

	/** Watch for JSHint */
	gulp.watch( "src/js/{!(lib)/*.js,*.js}", ["uglify"] );
});

/** Gulp default task */
gulp.task( "default", ["watch"] );
