var gulp = require('gulp'),
    modernizr = require('gulp-modernizr'); /* To test web browser for SVG support */


gulp.task('modernizr', function(){
    return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js']) /* Modernizr will go through all css and js files */
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});