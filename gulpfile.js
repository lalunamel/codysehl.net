var gulp = require('gulp');

gulp.task('bower-move', function() {
	gulp.src('./bower_components/octicons/**')
		.pipe(gulp.dest('./app/assets/img/octicons'));
});

gulp.task('default', ['bower-move']);