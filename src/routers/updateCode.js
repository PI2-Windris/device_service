const { Router } = require("express");
const updateController = require("../controllers/updateCode");

const router = Router();

router.get("/", updateController.get);
// router.post("/", updateController.store);


module.exports = router;