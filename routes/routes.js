const express = require("express");
const router = express.Router();
const index = require("../controllers/auth");
const addRoleController = require("../controllers/addRoleController")
const ggCloudController = require("../controllers/ggCloudController");

router.post("/signup", index.signUp);
router.post("/addRole", addRoleController.addRoleHost)
router.get("/createBucketggCloud", ggCloudController.createBucket);
router.post(
  "/upImageToGlobal",
  ggCloudController.uploadImageToBucket
);
router.post(
  "/upImageBackToGlobal",
  ggCloudController.uploadImageBackToBucket
);router.use("/", (req, res, next) => {
  res.status(404).json({ error: "router không tồn tại" });
});

module.exports = router;
