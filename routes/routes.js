const express = require("express");
const router = express.Router();
const uplaod = require("../fileHelpre/imageUploadMulter");
const {
  singleFileUpload,
  multipleFileUpload,
} = require("../controoler/fileControoler");

const { singleImage,mulitImage } = require("../controoler/imageEjs");

router.get("/", (req, res) => {
  res.render("uploadPage");
});
router.get("/singleFile", singleImage);
router.get("/multiFile", mulitImage);

router.post("/singleFile", uplaod.single("file"), singleFileUpload);
router.post("/multiFile", uplaod.array("files"), multipleFileUpload);
module.exports = router;
