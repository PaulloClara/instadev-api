const Axios = require("axios");

module.exports = {
  config(params) {
    return Axios.create({
      ...params,
      timeout: 10000
    });
  }
};
