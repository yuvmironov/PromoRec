var gulp = require('gulp'),
	lp = require('gulp-load-plugins')();

gulp.task('styl', function () {
    return gulp.src('src/main.styl')
		.pipe(lp.sourcemaps.init())
        //.pipe(lp.stylus())
        .pipe(lp.stylus().on( 'error', lp.notify.onError(
			  {
				message: "<%= error.message %>",
				title  : "Stylus Error!"
			  } ) )
		  )
        .pipe(lp.csso({restructure: true}))
        .pipe(lp.sourcemaps.write('maps'))	
        .pipe(gulp.dest('relise'))
});

gulp.task('preload', function () {
    return gulp.src('src/styl/Preload.styl')
        //.pipe(lp.stylus())
        .pipe(lp.stylus().on( 'error', lp.notify.onError(
			  {
				message: "<%= error.message %>",
				title  : "Stylus Error!"
			  } ) )
		  )
        .pipe(lp.csso({restructure: true}))
        .pipe(gulp.dest('relise'))
});


gulp.task('pug', function () {
    return gulp.src('src/*.pug')
		.pipe(lp.pug({}))
        .pipe(gulp.dest('relise'))
});

gulp.task('js', function () {
    return gulp.src(['libs/jquery/dist/jquery.js',
					 'libs/fullpage.js/dist/jquery.fullpage.js',
					 'src/main.js'])
		.pipe(lp.sourcemaps.init())
		.pipe(lp.concat('main.js'))
		.pipe(lp.sourcemaps.write('maps'))
		.pipe(gulp.dest('relise'))
});

gulp.task('img', function () {
	return gulp.src('src/images/**/*.*')
		.pipe(gulp.dest('relise/images'))
});

gulp.task('default', ['styl', 'pug', 'js', 'img'], function () {
    gulp.watch('src/**/*.styl', ['styl']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/images/**/*.*.', ['img']);
});