const router = require("express").Router();
const adminController = require("./admin.controller");

router.route("/").get(adminController.getUserData);
router.route("/signup").post(adminController.signUp);
router.route("/signin").post(adminController.signIn);
router.route("/:userId").put(adminController.updateUserInfo);
router.route("/:userId").delete(adminController.deleteUser);
// router.route("/:userId").get(adminController.showUser);

module.exports = router;
