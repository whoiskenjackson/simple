var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed',includePaths:['./src']}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['css']);
});

gulp.task('default', ['css']);