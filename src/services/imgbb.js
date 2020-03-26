const FormData = require("form-data");
const Api = require("../config/axios").config({
  baseURL: process.env.IMAGE_API_URL
});

module.exports = {
  upload({ buffer: image }) {
    const form = new FormData();
    form.append("image", image);

    return Api.post(`/upload?key=${process.env.IMAGE_API_KEY}`, form, {
      headers: form.getHeaders()
    });
  }
};
