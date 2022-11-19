global.$ = {
  //пакеты
  gulp: require("gulp"),
  browserSync: require("browser-sync").create(),
  gp: require("gulp-load-plugins")(),
  //config
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

//задачи
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

//watcher
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html).on("all", $.browserSync.reload);
  $.gulp.watch($.path.scss.watch, task.scss).on("all", $.browserSync.reload);
  $.gulp.watch($.path.js.watch, task.js).on("all", $.browserSync.reload);
  $.gulp
    .watch($.path.dataFiles.watch, task.dataFiles)
    .on("all", $.browserSync.reload);
  $.gulp.watch($.path.img.watch, task.img).on("all", $.browserSync.reload);
  $.gulp.watch($.path.font.watch, task.font).on("all", $.browserSync.reload);
  $.gulp.watch($.path.svg.watch, task.svg).on("all", $.browserSync.reload);
  $.gulp
    .watch($.path.favicon.watch, task.favicon)
    .on("all", $.browserSync.reload);
};

//tasks
const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(
    task.html,
    task.scss,
    task.js,
    task.dataFiles,
    task.img,
    task.font,
    task.svg,
    task.favicon
  )
);
const dev = $.gulp.series(build, $.gulp.parallel(watcher, task.server));
const devContinue = $.gulp.parallel(watcher, task.server);

//
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.dataFiles = task.dataFiles;
exports.img = task.img;
exports.font = task.font;
exports.svg = task.svg;
exports.favicon = task.favicon;
exports.devContinue = devContinue;

//dev
exports.default = $.app.isProd ? build : dev;

console.log(process.argv);
