//html
const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe($.gp.plumber($.app.plamber("HTML", $.gp.notify)))
    .pipe($.gp.fileInclude())
    .pipe($.gp.webpHtml())
    .pipe($.gp.size({ title: "до сжатия" }))
    .pipe($.gp.htmlmin($.app.htmlmin))
    .pipe($.gp.size({ title: "после сжатия" }))
    .pipe($.gulp.dest($.path.html.dest));
};

module.exports = html;
