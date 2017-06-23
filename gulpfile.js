var gulp = require('gulp');

var config = {
	stylusDest: "./app/styl/csScaffold"
}

gulp.task('bower-move', function() {
	gulp.src('./bower_components/codysehl.net-scaffold/styl/**')
		.pipe(gulp.dest(config.stylusDest));
});

gulp.task('default', ['bower-move']);