const router = require("express").Router();

const cartController = require("./controller");

const authorize = require("../../common/authorization");

router.get("/:userId", authorize.checkStrictPermission, cartController.cartInfo);
router.put("/:userId/add", authorize.checkStrictPermission, cartController.cartAdd);
router.delete("/:userId/delete", authorize.checkStrictPermission, cartController.cartDelete);
router.put("/:userId/purchased", authorize.checkStrictPermission, cartController.cartPurchased);

module.exports = router;