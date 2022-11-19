const dataFiles = () => {
  return $.gulp
    .src($.path.dataFiles.src)
    .pipe($.gp.plumber($.app.plamber("dataFiles", $.gp.notify)))

    .pipe($.gulp.dest($.path.dataFiles.dest));
};

module.exports = dataFiles;
