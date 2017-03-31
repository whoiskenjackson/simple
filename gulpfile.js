var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('./dev/css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed',includePaths:['./dev/css']}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
  gulp.watch('./dev/css/**/*.scss', ['css']);
});

gulp.task('default', ['css']);