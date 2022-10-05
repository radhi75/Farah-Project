const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await users.findOne({ email });
    if (found) {
      return res.status(400).send({ errors: [{ msg: "user already existe" }] });
    }
    const user = new users(req.body);
    const salt = 10;
    const hash = bcrypt.hashSync(password, salt);
    user.password = hash;
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.SecretorKey);

    await user.save();

    res.status(200).send({ msg: "user added", user, token });
  } catch (error) {
    res.status(500).send({ error: "could not add user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "user not Found" }] });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.SecretorKey);
    res.status(200).send({ msg: "welcome back", user, token });
  } catch (error) {
    res.status(500).send({ error: [{ msg: "could not logging" }] });
  }
};