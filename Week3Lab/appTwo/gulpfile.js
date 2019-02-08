// Gulp 4

const { src, dest, parallel, series } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');
const removeCode = require('gulp-remove-code');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

let vendorPackages = [
  'node_modules/jquery/dist/jquery.min.js',
];

function html() {
  return src(['app/*.html'])
      .pipe(inject(src(['./build/js/*.js', './build/**/*.css'], { read: false }),
        {ignorePath: 'build', addRootSlash: false }))
      .pipe(removeCode({ production: true }))
      .pipe(dest('build'));
}

function js() {
  return src('app/js/*.js', { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
}

function vendor_js() {
  return src(vendorPackages)
    .pipe(concat('vendor.min.js'))
    .pipe(dest('build/js'))
}

function css() {
  return src('app/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'))
}

function images() {
  return src('app/images/*.jpg')
    .pipe(dest('build/images'))
}

function watch_files() {
  watch('app/*.html', html);
  watch('app/js/*.js', js);
  watch('app/css/*.css', css);
}

exports.js = js;
exports.css = css;
//exports.default = series(vendor_js, js, css, images, html);
exports.default = series(vendor_js, js, css, images, html, watch_files);