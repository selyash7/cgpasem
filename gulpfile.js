const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// Paths
const paths = {
  scripts: {
    src: 'assets/js/**/*.js', // Source JavaScript files
    dest: 'build/'           // Destination for built files
  }
};

// Task: Process JavaScript
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat('bundle.js'))      // Combine into a single file
    .pipe(uglify())                 // Minify the JavaScript
    .pipe(gulp.dest(paths.scripts.dest)); // Save the output
}

// Task: Watch files
function watch() {
  gulp.watch(paths.scripts.src, scripts);
}

// Export tasks
exports.scripts = scripts; // Explicitly export the scripts task
exports.default = gulp.series(scripts, watch); // Default task