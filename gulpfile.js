const gulp   = require('gulp');
const stylus = require('gulp-stylus');

// compile stylus to css :)
gulp.task('stylus', () =>
  gulp.src('./assets/stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets/css'))
);

// watch styles file
gulp.task('watch', () => {
  gulp.watch(['app/screens/**/*.styl', 'assets/stylus/*.styl'], ['stylus']);
});
