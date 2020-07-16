const router = require("express").Router();

router.use("/lead", require("./leads"));
router.use("/user", require("./users"));

module.exports = router;
