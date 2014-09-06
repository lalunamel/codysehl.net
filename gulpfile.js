var gulp = require('gulp');

var config = {
	octiconsDest: "./app/assets/img/octicons",
	stylusDest: "./app/styl/csScaffold"
}

gulp.task('bower-move', function() {
	gulp.src('./bower_components/octicons/**')
		.pipe(gulp.dest(config.octiconsDest));

	gulp.src('./bower_components/codysehl.net-scaffold/styl/**')
		.pipe(gulp.dest(config.stylusDest));
});

gulp.task('default', ['bower-move']);