//svg
const svg = () => {
  return $.gulp
    .src($.path.svg.src)
    .pipe($.gp.plumber($.app.plamber("SVG", $.gp.notify)))
    .pipe($.gp.cheerio($.app.cheerio))
    .pipe($.gp.svgSprite($.app.svgspriteConfig))
    .pipe($.gulp.dest($.path.svg.dest));
};

module.exports = svg;
