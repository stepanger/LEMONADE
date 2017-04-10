var gulp    = require('gulp');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

var path = {
    
    build: {
        js: "build/"
    },
    
    src: {
         js: "src/*.js"   
    }
    
}

gulp.task('js:task', function () {
    return gulp.src(path.src.js)
        .pipe(concat('LEMONADE.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('minify', function() {
    return gulp.src('build/LEMONADE.js')
        .pipe(uglify())
        .pipe(rename('LEMONADE.min.js'))
        .pipe(gulp.dest('build'));
});