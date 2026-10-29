require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
require("./model/conn");
const Model = require("./model/model");
const bcrypt = require("bcryptjs");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  const records = await Model.find();
  res.send(records);
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (password === cpassword) {
      const hashed = await bcrypt.hash(password, 10);
      const chashed = await bcrypt.hash(cpassword, 10);

      // console.log(hashed);
      // console.log(chashed);

      const insert = new Model({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        cpassword: chashed,
      });
      const inserted = await insert.save();

      console.log(inserted);
    } else {
      console.log("passwords didn't math");
      res.send("passwords didn't match");
    }
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = await Model.findOne({ username });

  if (foundUser) {
    console.log("found!!");
  } else {
    console.log("not Found...");
  }

  const isMatch = await bcrypt.compare(password, foundUser.password);

  if (isMatch) {
    res.send("yeh password matched!!!");
  } else {
    res.send("didn't match...");
  }
});

app.get("/delete/:id", async (req, res) => {
  const _id = req.params.id;

  const deleted = await Model.findByIdAndDelete(_id);
  res.send(deleted);
});

app.listen(port, () => {
  console.log(`App Launched at ${port}`);
});
