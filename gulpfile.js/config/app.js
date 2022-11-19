const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,
  cheerio: {
    run: function ($) {
      $("[fill]").removeAttr("fill");
      $("[stroke]").removeAttr("stroke");
      $("[style]").removeAttr("style");
    },
    parserOptions: { xmlMode: false },
  },
  svgspriteConfig: {
    mode: {
      symbol: true,
    },
  },
  plamber(title, notify) {
    return {
      errorHandler: notify.onError((error) => ({
        title: title,
        message: error.message,
      })),
    };
  },
  htmlmin: {
    collapseWhitespace: isProd,
  },
  webpack: {
    mode: isProd ? "production" : "development",
  },
  imagemin: {
    verbose: true,
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
  favicons: {
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
    path: "img/favicon",
  },
};
