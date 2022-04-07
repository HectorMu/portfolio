const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const controller = require("../controllers/projects.controller");
const upload = require("../middlewares/upload");

router.get("/api/projects/listall", controller.ListAll);
router.post("/api/projects/save", verifyToken, upload, controller.Save);
router.delete("/api/projects/delete/:id", verifyToken, controller.Delete);
router.put("/api/update/projects/:id", verifyToken, controller.Update);

module.exports = router;
