const router = require("express").Router();

const cartController = require("./controller");

const authorize = require("../../common/authorization");

router.use(authorize.checkPermission);
router.get("/:userId", cartController.cartInfo);
router.put("/:userId/add", cartController.cartAdd);
router.delete("/:userId/delete", cartController.cartDelete);
router.put("/:userId/purchased", cartController.cartPurchased);

module.exports = router;