const { Router } = require("express");
const updateController = require("../controllers/updateCode");
const isAdminMiddleware = require("../middlewares/admin-middleware");
const router = Router();

router.get("/latest", isAdminMiddleware,  updateController.get);
router.get("/", isAdminMiddleware, updateController.latest);
router.get("/:version", isAdminMiddleware, updateController.version);
router.post("/", isAdminMiddleware, updateController.store);


module.exports = router;