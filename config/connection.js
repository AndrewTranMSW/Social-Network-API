const { connect, connection } = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialDB",
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connection;
