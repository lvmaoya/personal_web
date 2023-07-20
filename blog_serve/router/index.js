const express = require("express");
const router = express.Router();
router.use(require("./showEnd"));
router.use(require("./workEnd"));
module.exports = router;
