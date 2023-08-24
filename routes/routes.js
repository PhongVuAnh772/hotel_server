const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const addRoleController = require("../controllers/addRoleController")
const ggCloudController = require("../controllers/googleCloudController");
const hotelController = require("../controllers/hotelController")

router.post("/signup", authController.signUp);
router.post("/isauth", authController.isAuth);
router.post("/signin", authController.signIn);
router.post("/addRole", addRoleController.addRoleHost)
router.get("/createBucketggCloud", ggCloudController.createBucket);
router.post(
  "/upImageToGlobal",
  ggCloudController.uploadImageToBucket
);
 
router.post(
  "/upImageBackToGlobal",
  ggCloudController.uploadImageBackToBucket
);
router.post(
  "/hotelController",
  hotelController.addHotel
);

router.use("/", (req, res, next) => {
  res.status(404).json({ error: "router không tồn tại" });
});


module.exports = router;
