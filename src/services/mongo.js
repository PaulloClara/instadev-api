const mongoose = require("mongoose");

module.exports = {
  config() {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
};
