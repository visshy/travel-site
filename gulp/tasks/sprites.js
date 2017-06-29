var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    svg2png = require('gulp-svg2png'); 


var config = {
    shape:{
        spacing:{
           padding: 1 /*This will help to get 1px of spacing between each icon in the sprite svg file*/
        }
    },
    mode: {
        css: {
            variables:{
                replaceSvgWithPng: function(){
                    return function(sprite, render){
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg', /*to remove word 'css' from the auto generated filename*/
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){ /*This task will ensure we have the most updated folder and file version of the sprite svg file*/
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('createPngCopy', ['createSprite'], function(){
   return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png()) /* To convert svg file to png file inorder to support older browsers*/
        .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function(){ /*to copy the sprite svg/png image from temp folder to assets folder*/
   return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function () { /*copyspriteCSS task depends on createSprite task*/
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css')) /*to rename the file sprite.css to _sprite.css since all css files have an underscore*/
        .pipe(gulp.dest('./app/assets/styles/modules')); /*destination folder where sprite.css needs to be copied to*/
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
   return del('./app/temp/sprite'); /*This task will delete sprite folder residing inside the temp folder once all tasks are complete. we do not need it anymore*/
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']); /*icons task created to run createSprite, copySpriteGraphic and copySpriteCSS tasks in a single task*/
