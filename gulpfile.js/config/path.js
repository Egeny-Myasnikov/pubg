const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,
  html: {
    src: `${pathSrc}/html/*.html`,
    watch: `${pathSrc}/html/**/*.html`,
    dest: pathDest,
  },
  pug: {
    src: `${pathSrc}/pug/*.pug`,
    watch: `${pathSrc}/pug/**/*.pug`,
    dest: pathDest,
  },
  css: {
    src: `${pathSrc}/css/*.css`,
    watch: `${pathSrc}/css/**/*.css`,
    dest: `${pathDest}/css`,
  },
  scss: {
    src: `${pathSrc}/sass/*.{sass,scss}`,
    watch: `${pathSrc}/sass/**/*.{sass,scss}`,
    dest: `${pathDest}/css`,
  },
  js: {
    src: `${pathSrc}/js/*.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`,
  },
  dataFiles: {
    src: `${pathSrc}/data/*.json`,
    watch: `${pathSrc}/data/**/*.json`,
    dest: `${pathDest}/data`,
  },
  img: {
    src: `${pathSrc}/img/*.{png,jpg,jpeg,gif,svg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    dest: `${pathDest}/img`,
  },
  font: {
    src: `${pathSrc}/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    watch: `${pathSrc}/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/font`,
  },
  svg: {
    src: `${pathSrc}/svg/*.svg`,
    watch: `${pathSrc}/svg/**/*.svg`,
    dest: `${pathDest}`,
  },
  favicon: {
    src: `${pathSrc}/img/favicon/favicon.svg`,
    watch: `${pathSrc}/img/favicon/favicon.svg`,
    dest: `${pathDest}/img/favicon`,
  },
};
