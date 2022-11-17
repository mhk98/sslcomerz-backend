const router = require('express').Router();
// const user = require('../../models/user/user');
const User = require('../../controllers/user/users.controller')
// const recharge = require('../../models/recharge/recharge');

// router.post('/', user.userInsert);
router.get("/cards/:id", User.getCardByUserId);

module.exports = router;
