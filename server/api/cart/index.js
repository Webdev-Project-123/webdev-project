const router = require("express").Router();

const cartController = require("./controller");

const authorize = require("../../common/authorization");

router.get("/:userId", authorize.checkPermission, cartController.cartInfo);
router.put("/:userId/add", authorize.checkPermission, cartController.cartAdd);
router.delete("/:userId/delete", authorize.checkPermission, cartController.cartDelete);
router.put("/:userId/purchased", authorize.checkPermission, cartController.cartPurchased);

module.exports = router;