const webpack = require("webpack-stream");
//js
const js = () => {
  return $.gulp
    .src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber($.app.plamber("JS", $.gp.notify)))
    .pipe($.gp.babel())
    .pipe(webpack($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }));
};

module.exports = js;
