const del = require("del");
//clear derictory
const clear = () => {
  return del($.path.root);
};

module.exports = clear;
