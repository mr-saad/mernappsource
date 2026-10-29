const mongoose = require("mongoose");

const options =
  "mongodb+srv://saad:saad@cluster0.7wuqt.mongodb.net/react-form?retryWrites=true&w=majority" || "mongodb://localhost:27017/react-form";
mongoose
  .connect(options, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db Connected!!"))
  .catch((e) => console.log("Error" + e));
