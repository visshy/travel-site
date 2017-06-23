var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false, // This will hide the black box that appears at the top right corner when the browers auto refreshes
        server: {
            baseDir: "app" //Setting up the server by telling it where to look for
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload(); //We want browserSync to auto-refresh when we make a change in index.html file
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject'); // This will not begin until 'styles' task is complete
    });
});


gulp.task('cssInject', ['styles'], function () { // the cssInject task will begin only once 'styles' task has a chance  to run and complete. So 'Styles' task is added as a dependency.
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream()); //we are taking the contents of our compiled css file and hand it over to browserSync so that inject those styles onto the page on the fly
});