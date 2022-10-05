const express = require('express');
const { Register, login } = require('../controlles/user');
const { isAuth } = require('../Middlewear/isAuth');
const { Validationregister, Validation, Validationlogin } = require('../Middlewear/validation');
const userRoutes = express.Router();



userRoutes.post("/register", Validationregister, Validation, Register);
userRoutes.post("/login", Validationlogin, Validation,login);
userRoutes.get("/current", isAuth, (req, res) => {
    res.send(req.user);
  });



module.exports = userRoutes;