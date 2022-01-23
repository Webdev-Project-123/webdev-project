const router = require("express").Router();

const cartController = require("./controller");

const authorize = require("../../common/authorization");

router.get("/:userId", authorize.isValid, cartController.cartInfo);

module.exports = router;