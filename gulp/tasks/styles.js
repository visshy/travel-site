var gulp = require('gulp'),
    postcss = require('gulp-postcss'), //main postcss
    autoprefixer = require('autoprefixer'), // to auto add prefixes like webkit for     different browser
    cssvars = require('postcss-simple-vars'),// to add variables to css ($xxx)
    nested = require('postcss-nested'),  //To add nested css
    cssImport = require('postcss-import'), //To replace the import line in styles.css with its content
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba'); /*to convert hex color code to rgba code*/

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css') //return is used for asynchronous function like 'src'
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorInfo){
        console.log(errorInfo.toString());//It will print out error message in command line
        this.emit('end'); //the styles task has gracefully come to an end when an error occurs in css file
        })        
        .pipe(gulp.dest('./app/temp/styles'));
});