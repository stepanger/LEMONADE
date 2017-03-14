var gulp    = require('gulp');
var concat  = require('gulp-concat');

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