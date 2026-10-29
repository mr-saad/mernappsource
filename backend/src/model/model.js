const mongoose = require("mongoose");
const moment = require("moment")();

const newSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  timestamp: {
    type: String,
    default: () => moment.format("DD:MM:yyyy hh:mm:ssA"),
  },
});

const Model = new mongoose.model("Records", newSchema);

module.exports = Model;
