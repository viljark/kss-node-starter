var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var kss = require('kss');

var config = {
    "homepage": "../readme.md",
    // "//": "The source and destination paths are relative to this file.",
    "source": [
        "scss"
    ],
    "destination": "styleguide/",

    // "//": "The css and js paths are URLs relative to the generated style guide.",
    "css": [
        "../scss/styles.css"
    ],
    "verbose": true,
    "js": [],
    "builder": 'custom-theme'
};

gulp.task('styleguide', function(){
    return kss(config);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'styleguide'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch(["./scss/*.scss", "./scss/*/*.scss"], ['sass', 'styleguide']);
    gulp.watch("./scss/*/*.hbs", ['styleguide']);
    gulp.watch("./styleguide/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./scss"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);