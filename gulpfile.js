var gulp = require('gulp'),
    less = require("gulp-less");

gulp.task('default', ['compile-less'])
 
gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('auto', function(){
    gulp.watch('less/*.less',['compile-less'])
})