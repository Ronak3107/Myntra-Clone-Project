const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb://127.0.0.1:27017/test?maxPoolSize=10",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};
