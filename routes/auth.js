const router = require("express").Router();
const userController = require("../controllers/user/users.controller");

router.post("/login", userController.login);

module.exports = router;
