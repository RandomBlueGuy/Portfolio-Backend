const router = require("express").Router();
const adminController = require("./admin.controller");

router.route("/signup").post(adminController.signUp);
router.route("/signin").post(adminController.signIn);
router.route("/").get(adminController.getUserData);
router.route("/:userId").put(adminController.updateUserInfo);

// router.route("/:userId").get(adminController.showUser);

module.exports = router;
