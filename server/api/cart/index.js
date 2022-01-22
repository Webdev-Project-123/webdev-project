const router = require("express").Router();

const cartController = require("./controller");

const authorize = require("../../common/authorization");

router.get("/:userId", [authorize.isValid, authorize.checkPermission], cartController.cartInfo);
router.put("/:userId/add", [authorize.isValid, authorize.checkPermission], cartController.cartAdd);
router.get("/:userId/delete", [authorize.isValid, authorize.checkPermission], cartController.cartDelete);

module.exports = router;